import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { MongoClient, ObjectId } from 'mongodb';

process.loadEnvFile();
dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.DATABASE_NAME;


const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.use(express.json());

// create the DB connection
const client = await MongoClient.connect(url);
const db = client.db(dbName);


// API end point for socks
app.get('/socks', async(req, res) => {
    const sockCollection = db.collection(process.env.SOCKS_COLLECTION);
    const socks = await sockCollection.find({}).toArray();
    res.json(socks);
  });


// API end point for tops
app.get('/tops', async(req, res) => {
  const topsCollection = db.collection(process.env.TOPS_COLLECTION);
  const tops = await topsCollection.find({}).toArray();
  res.json(tops);
});

// API end point for bottoms
app.get('/bottoms', async(req, res) => {
  const bottomsCollection = db.collection(process.env.BOTTOMS_COLLECTION);
  const bottoms = await bottomsCollection.find({}).toArray();
  res.json(bottoms);
});

app.listen(port, ()=> console.log(`Listening for requests on port ${port}`))


process.on('SIGINT', () => {
  client.close();
  console.log('Exiting gracefully')
  process.exit(0);
});
