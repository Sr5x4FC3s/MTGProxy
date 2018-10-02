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
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.post('/decksubmission', (request, response) => {
  let id = request.params.id;
  let data = request.body;
  console.log(data, 'data some sort has been received in the server');
})

app.listen(PORT, () => { console.log(`server is connected to port ${PORT}`)});
