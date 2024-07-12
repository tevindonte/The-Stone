import express from 'express';
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;


const app = express();
app.use(cors()); 
app.use(express.json());

const PORT = 3000;

//employee result
app.get('/employees/:id', async (req, res) => {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const { id } = req.params;
    console.log(id);
    const employee = await collection.find({"_id": new ObjectId(id)}).toArray();
    res.json(employee);
});

//manager result
app.get('/manager/:id', async (req, res) => {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const { id } = req.params;
    console.log(id);
    const manager = await collection.find({"_id": new ObjectId(id)}).toArray();
    const employee = await collection.find({"_id": new ObjectId(id)}).toArray();
    res.json(employee);
});



//human resources result














//employee login
app.post('/socks/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT uid FROM users WHERE username = $1 AND password = $2', [username, password]);
        if (result.rows.length > 0) {
            res.status(200).json({ uid: result.rows[0].uid });
        } else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//manager login
app.post('/socks/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT uid FROM users WHERE username = $1 AND password = $2', [username, password]);
        if (result.rows.length > 0) {
            res.status(200).json({ uid: result.rows[0].uid });
        } else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//human resources login
app.post('/socks/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT uid FROM users WHERE username = $1 AND password = $2', [username, password]);
        if (result.rows.length > 0) {
            res.status(200).json({ uid: result.rows[0].uid });
        } else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
