const express         = require('express');
const bodyParser      = require('body-parser');
const path            = require('path');
const cors            = require('cors');
const connectMongoose = require('../database/mongoose/connect.js');
const SHF             = require('../helperFunctions/serverHelperFunctions/helper.js');

const PORT = 3003;

const app = express();

connectMongoose.establishConnection();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/cardretrieval/:cardarray', (req, res) => {
  let data = SHF.convertString(req.params.cardarray); //['String']
  let promise = SHF.queryDatabase(data);
  res.status(200).send('retreival');
})

app.post('/cardsubmission', (req, res) => {
  let data = SHF.convertString(req.body.deckList); // ['String']
  let promise = SHF.getRequest(data);
  console.log('promise', promise);

  res.status(200).send('submission');
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(PORT, () => { console.log(`server is connected to port ${PORT}`)});
