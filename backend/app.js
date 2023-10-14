const express = require('express');
const cors = require('cors');
const app = express();
const { db } = require('./db/db');
const { readdirSync } = require('fs');
require('dotenv').config();
const corsOptions = {
  origin: 'https://phetmaja.onrender.com', // frontend URI (ReactJS)
};
app.use(express.json());
app.use(cors(corsOptions));

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
