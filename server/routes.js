const express    = require('express');
const routes     = express.Router();
const bodyParser = require('body-parser');
const path       = require('path');
const SHF        = require('../helperFunctions/serverHelperFunctions/helper.js');


routes.get('/cardretrieval/:cardarray', (req, res) => {
  console.log('ffdrfdsdsas', req.params.cardarray)
  let data = SHF.convertString(req.params.cardarray); //['String']

  let promise = new Promise((resolve, reject) => {
    let queried = SHF.queryDatabase(data);
    resolve(queried);
  }).then((result) => {
    return new Promise((resolve, reject) => {
      let collectedData = result;
      resolve(collectedData);
    })
  }).then((result) => {
    console.log('collected data', result);
    res.status(200).send(result);
  })
});

routes.get('/searchscry/:value', (req, res) => {
  let data = req.params.value;
  let promise = new Promise(resolve => {
    let query = SHF.searchScry(data);
    resolve(query);
  }).then(result => {
    res.send(result);
  });
})

routes.get('/cardsearch/:value', (req, res) => {
  let data = req.params.value; //'String'

  let promise = new Promise((resolve, reject) => {
    let queried = SHF.searchForCards(data);
    resolve(queried);
  }).then(result => {
    res.status(200).send(result);
  });
})

routes.get(`/retrievedeck/:deck`, (req, res) => {
  let data = req.params.deck;
  let data2Array = [data];

  let promise = new Promise((resolve, reject) => {
    let query = SHF.retrieveOneDeck(data2Array);
    resolve(query);
  }).then(result => {
    return new Promise((resolve, reject) => {
      let deck = result;
      resolve(deck);
    }).then(result => {
      res.status(200).send(result);
    })
  })
})

routes.get(`/retrieveAllDecks`, (req, res) => {
  let promise = new Promise((resolve, reject) => {
    let query = SHF.retrieveAllDecks();
    resolve(query);
  }).then((result) => {
    return new Promise ((resolve, reject) => {
      let collectedDecks = result;
      resolve(collectedDecks);
    }).then((result) => {
      //send the res back here
      res.status(200).send(result);
    })
  });
})

routes.post('/cardsubmission', (req, res) => {
  let data = SHF.convertString(req.body.deckList); // ['String']
  let promise = SHF.getRequest(data);
  res.status(200).send('Posted Data');
})

routes.post('/decksubmission', (req, res) => {
  let deckList = req.body.currentDeck; //['String']
  let deckName = req.body.deckName; //'String' 
  let deckType = req.body.deckType; //'String'
  let promise = SHF.submitDeck(deckName, deckList, deckType);

  res.status(200).send('Deck is posted');
})

routes.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

module.exports = routes;
