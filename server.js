const express = require("express");
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser')
require('dotenv/config');
const app = express();

app.use(bodyParser.json());

// ROUTERS

const apiRouter = require('./routes/posts');
app.use('/posts', apiRouter);

// DEFAULT

app.get('/', (req, res) => {
    res.send('<a href="/posts">post API </a>');
});

// DATABASE CONNECTION

const client = new MongoClient(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('connected');
  client.close();
});

app.listen(3000);