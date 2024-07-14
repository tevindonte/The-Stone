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
app.post('/employees/login', async (req, res) => {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const employee = await collection.findOne({ "Email" : Email });
        if (employee && employee.Password === Password) {
           
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//manager login
app.post('/manager/login', async (req, res) => {
    const { Email, Password, isManager } = req.body;
    if (!Email || !Password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
      const client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      const employee = await collection.findOne({ "Email" : Email });
      if (employee && employee.Password === Password) {
        if (isManager && employee.Manager === "Yes") {
          res.status(200).json({ message: 'Manager Login successful' });
        } else if (!isManager && employee.Manager === "No") {
          res.status(401).json({ message: 'Employee Login unsuccessful' });
        } else {
          res.status(401).json({ message: 'Authentication failed' });
        }
      } else {
        res.status(401).json({ message: 'Authentication failed' });
      }
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  



//human resources login
app.post('/hr/login', async (req, res) => {
    const { Email, Password, isHR } = req.body;
    if (!Email || !Password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const employee = await collection.findOne({ "Email" : Email });
        if (employee && employee.Password === Password) {
            if (isHR && employee.HR === "Yes") {
                res.status(200).json({ message: 'HR Login successful' });
            } else if (!isHR && employee.HR === "No") {
                res.status(401).json({ message: 'Employee Login unsuccessful' });
            } else {
                res.status(401).json({ message: 'Authentication failed' });
            }
        } else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 