import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
    const client = await clientPromise
    const db = client.db('test')
    let data = await db.collection('users').find({}).toArray();
    res.json(data);
}