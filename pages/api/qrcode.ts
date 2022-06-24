import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
    const client = await clientPromise
    const db = client.db('test')

    const data = req.query;

    // const response = await db.collection('users').update({ QRcode: data });
    const response = await db.collection('QRcode').insertOne(data);
    
    res.json(response);
}