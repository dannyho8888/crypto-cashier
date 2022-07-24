import React, {useState, useEffect} from 'react';
import DropdownMenu from '../components/DropdownMenu';
import Popup from '../components/Popup';
import Menu from '../components/Menu';
import clientPromise from '../lib/mongodb';
import { useSession } from "next-auth/react";
import Image from 'next/image';
import { QrcodeIcon } from '@heroicons/react/outline';
import FinishPopup from '../components/FinishPopup';

interface Props { 
  users: any,
  images: any
};

function upload({users, images}: Props) {
  const { data: session } = useSession();
  const userName = session?.user.name;

  const [popupBtn, setpopupBtn] = useState(false);
  const [coins, setCoins] = useState([]);
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [image, setImage] = useState('https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880');
  const [index, setIndex] = useState(0);    // coins[0] = bitcoin
  const [uploadData, setUploadData] = useState();
  const [imgPreview, setImgPreview] = useState('https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880');
  const [imageSrc, setImageSrc] = useState('');

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data = await res.json();
      setCoins(data);
      setImage(data[index].image);
      setName(data[index].name);
      setSymbol(data[index].symbol.toUpperCase());
    } catch (e) {
      console.log("Error when fetching data")
    }
  }

  // get coin information when first rendering the app
  useEffect(() => {
    fetchData();
    console.log("testing index:" + index);
  }, [index])

  const addQRcode = async (url) => {
    const data = await fetch(`http://localhost:3000/api/qrcode?user=${userName}&crypto=${coins[index].name}&qrcode=${url}`)
    // const res = await data.json()
    console.log("uploaded to mongodb");
    setpopupBtn(true);
  }

  // const checkIfExists = () => {
  //   for (let i = 0; i < images.length; i++) {
  //     if (images[i].user == userName && images[i].crypto == coins[index]?.name) {
  //       console.log('its already exist');
  //       setpopupBtn(true)
  //       return;
  //     }
  //   }
  //   addQRcode();
  // }

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImgPreview(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }


  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');
    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'crypto-cashier');

    const data = await fetch('https://api.cloudinary.com/v1_1/dfot970zi/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    console.log(data);
    setImageSrc(data.secure_url);
    setUploadData(data);
    addQRcode(data.secure_url)
  }

  // useEffect(() => {
  //   console.log(imageSrc)
  // }, [imageSrc]);

  return (
    <main className="grid grid-cols-12 ">
        <Menu />
        <div className="col-span-10 lg:col-span-8">
          <DropdownMenu changeIndex={i => setIndex(i)} coins={coins} image={image} symbol={symbol} name={name}/>
          <div className="text-xl bg-gray-800 flex m-2 py-2 pl-5 mb-0
              space-x-2 rounded-xl text-justify 
            hover:bg-gray-400 cursor-pointer text-white">
            Choose Network
          </div>
          {/* <Popup trigger={popupBtn} setTrigger={setpopupBtn}>
            <div className="text-white">You have already upload the same QRcode for {name}</div>
          </Popup> */}

          <FinishPopup trigger={popupBtn} setTrigger={setpopupBtn}>
            <div className="text-white">{name} QRcode uploaded!</div>
          </FinishPopup>          

          <form className="m-2" method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
            <p><input type="file" name="file" /></p>
            <div className="items-center bg-gray-800 my-2 p-3 rounded-xl ">
                <p className='text-white'>Wallet Address</p>
                <div  className='flex justify-center my-2 pb-10'>
                  <Image src={imgPreview} width={250} height={250} alt="nothing"/>
                </div>
            </div>
          
            <p 
              className="text-xl bg-gray-800 flex py-2 mb-0
              rounded-xl place-content-center font-bold
              hover:bg-gray-400 cursor-pointer text-white"
            >
              <button>
                Upload QRcode
              </button>
            </p>
          </form>
        
          

          
        </div>
      </main>
  )
}

export default upload

export async function getServerSideProps (context) {
  const client = await clientPromise
  const db = client.db('test')
  // db.collection('users').updateOne({ name: "Danny Ho"}, { $set: { QRcode: "www.im-url.com"}});
  let users = await db.collection('users').find({}).limit(10).toArray();
  let images = await db.collection('QRcode').find({}).toArray();
  users = JSON.parse(JSON.stringify(users));
  images = JSON.parse(JSON.stringify(images));
  return {
    props: { 
      users: users,
      images: images
     },
  }
}