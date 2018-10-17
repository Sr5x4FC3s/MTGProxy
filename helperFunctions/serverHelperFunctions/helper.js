const axios    = require('axios');
const bluebird = require('bluebird');
const mtg      = require('mtgsdk');
const mh       = require('../../database/mongoose/helperFunctions/helper.js');
// const db       = require('../../database/mongo.js');
// const mongo    = require('../../database/connection.js');

const convertString = (string) => {
  let nameArray = string.split(':');
  return nameArray;
}

const searchScry = (string) => {
  let data = convert2ConcatString(string);
  let request = new Promise (resolve => {
    let promise = () => {
      return axios.get(`https://api.scryfall.com/cards/named?exact=${data}`, data)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
      })
    }
    resolve(promise());
  }).then(result => {
    mh.insertData([result.data]);
    return result.data;
  })
  return request;
}

const getRequest = (array) => {
  let data = array;
  let foundCards = Promise.resolve(findData('ADD_CARDS_TO_DB', data)).then((foundCards) => {
    console.log('inserted cards');
  });
  return foundCards;
}

const searchForCards = (string) => {
  let data = string;
  let foundCards = new Promise(resolve => {
    let search = findData('SEARCH_API', data);
    resolve(search);
  }).then(result => {
    return result;
  });
  return foundCards;
}

const queryDatabase = (array) => {
  let data = array;
  let foundCards = Promise.resolve(findData('SEARCH_DB_FOR_CARDS', data)).then((foundCards) => {
    return (foundCards);
  });
  return foundCards;
}

const createObjectConvertArray = (name, list, type) => {
  let deckObject = {};
  let deckArray = [];

  deckObject.name = name;
  deckObject.list = list;
  deckObject.type = type;

  deckArray.push(deckObject);

  return deckArray;
};

const submitDeck = (name, deck, type) => {
  let deckArray = createObjectConvertArray(name, deck, type);

  let promise = Promise.resolve((findData('SUBMIT_DECK', deckArray)).then((result) => {
    console.log('inserted deck');
  }));
  return promise;
}

const retrieveOneDeck = (array) => {
  let promise = Promise.resolve((findData('RETRIEVE_ONE_DECK',array)).then((result) => {
    console.log('the deck', result);
    return result;
  }));
  return promise;
}

const retrieveAllDecks = () => {
  let promise = Promise.resolve((findData('RETRIEVE_ALL_DECKS')).then((result) => {
    console.log('all decks: ', result);
    return result;
  }));
  return promise;
}

const findData = (id, array) => {
  let data = array;
  let foundCards = [];
  let querydb = mh.queryName;

  if (id === 'ADD_CARDS_TO_DB') {
    return new Promise(resolve => {
      for (let i = 0; i < data.length; i++) {
        mtg.card.where({name: data[i].trim()})
        .then((results) => {
          foundCards.push(results[0]);
          if (foundCards.length === data.length) {
            resolve(foundCards);
            mh.insertInstance(foundCards);
            return foundCards;
          } else {
            console.log('Still Searching...');
          }
        })
        .catch((err) => {
          console.log(err);
        })
      }
    })
  } else if (id === 'SEARCH_API') {
    return new Promise(resolve => {
      let cards = mtg.card.where({name: array})
      resolve(cards);
    }).then(results => {
      return results;
    })
  } else if (id === 'SEARCH_DB_FOR_CARDS') {
    return new Promise(resolve => { 
      let theQuery = querydb(data)
      resolve(theQuery);
    }).then((result) => {
      return result;
    })
  } else if (id === 'SUBMIT_DECK') {
    return new Promise(resolve => {
      let insertDeck = mh.insertDeck(data);
      resolve(insertDeck);
    }).then((result) => {
      console.log('done with deck insert');
    })
  } else if (id === 'RETRIEVE_ALL_DECKS') {
    return new Promise((resolve, reject) => {
      let retrieveAllDecks = mh.queryAllDecks();
      resolve(retrieveAllDecks);
    }).then((result) => {
      console.log('these are all the decks : ', result);
      return result;
    })
  } else if (id === 'RETRIEVE_ONE_DECK') {
    return new Promise((resolve, reject) => {
      let retrieveOneDeck = mh.queryOneDeck(array[0]);
      resolve(retrieveOneDeck);
    }).then((result) => {
      console.log('the queried deck :', result);
      return result;
    })
  }
};

const convert2ConcatString = (string) => {
  let spaceRegx = /([ ])/gi;
  let value = string.replace(spaceRegx, '+');
  console.log(value);
  return value;
}

module.exports = {
  convertString: convertString,
  getRequest: getRequest, 
  searchForCards: searchForCards,
  searchScry: searchScry,
  queryDatabase: queryDatabase, 
  submitDeck: submitDeck, 
  retrieveOneDeck: retrieveOneDeck,
  retrieveAllDecks: retrieveAllDecks, 
  convert2ConcatString: convert2ConcatString
};