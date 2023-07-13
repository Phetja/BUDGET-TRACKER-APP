const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) =>
  app.use('/api/v1', require('./routes/' + route))
);

app.get('/', (req, res) => {
  res.send('Hello world');
});
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log('You are listening to port:', PORT);
  });
};

server();
