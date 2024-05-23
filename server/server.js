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
const prodCollection = db.collection(process.env.PRODUCTS_COLLECTION);


// API end point for general products
app.get('/products', async(req, res) => {
  const products = await prodCollection.find({}).toArray();
  res.json(products);
});



// API end point for sock products.
app.get('/products/socks', async(req, res) => {
    const socks = await prodCollection.find({product:"sock"}).toArray();
    res.json(socks);
  });


// API end point for top products.
app.get('/products/tops', async(req, res) => {
  const tops = await prodCollection.find({product:"top"}).toArray();
  res.json(tops);
});

// API end point for bottom products.
app.get('/products/bottoms', async(req, res) => {
  const bottoms = await prodCollection.find({product:"bottom"}).toArray();
  res.json(bottoms);
});

app.listen(port, ()=> console.log(`Listening for requests on port ${port}`))


process.on('SIGINT', () => {
  client.close();
  console.log('Exiting gracefully')
  process.exit(0);
});
