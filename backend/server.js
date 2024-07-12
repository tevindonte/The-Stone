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
app.get('/employees/:email', async (req, res) => {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const { id } = req.params;
    console.log(id);
    const employee = await collection.findOne({"email": id});
    res.json(employee);
});




//manager result
app.get('/manager/:email', async (req, res) => {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const { id } = req.params;
    console.log(id);
    try {
        const manager = await collection.findOne({ "email": id });
        
        if (!manager) {
            res.status(404).json({ error: 'Manager not found' });
            return;
        }
        const managerEmployee = manager.managerEmployee;
        console.log('managerEmployee:', managerEmployee);
        const employee = await collection.findOne({"Name": managerEmployee});

        const responseData = {
            manager,
            employee
        };
        res.json(responseData);
    } catch (error) {
        console.error('Error retrieving manager:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



//human resources result
app.get('/hr/search', async (req, res) => {
    try {

        const search = req.body;

        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const results = await collection.find({ 'Name': search.Name }).toArray();

        res.json(results); 
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});












//employee login
app.post('/employee/login', async (req, res) => {
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
app.post('/manager/login', async (req, res) => {
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
app.post('/hr/login', async (req, res) => {
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
 