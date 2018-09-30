const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const db = require('mongodb');
const PORT = 3003;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => { console.log(`server is connected to port ${PORT}`)});
