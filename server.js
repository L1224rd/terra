const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/views', express.static('views'));

// app.use('/usuarios', require('./routes/usuarios'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home/home.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Running at port ${process.env.PORT}`);
});