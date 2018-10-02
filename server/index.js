const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');
const cors        = require('cors');
const SHF         = require('../helperFunctions/serverHelperFunctions/helper.js');
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
  let deckData = data.deckList;
  let parsedData = SHF.parseColons(deckData);

  console.log(`these cards have been received in the server:`, data.deckList);
  console.log(parsedData);
})

app.listen(PORT, () => { console.log(`server is connected to port ${PORT}`)});
