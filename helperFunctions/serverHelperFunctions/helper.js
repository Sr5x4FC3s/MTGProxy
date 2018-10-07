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

const getRequest = (array) => {
  let data = array;
  let foundCards = Promise.resolve(findData('ADD_CARDS_TO_DB', data)).then((foundCards) => {
    console.log('inserted these: ', foundCards);
  });
  return foundCards;
}

const queryDatabase = (array) => {
  let data = array;
  let foundCards = Promise.resolve(findData('SEARCH_DB_FOR_CARDS', data)).then((foundCards) => {
    console.log('these are found cards', foundCards);
  });
  return foundCards;
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
  } else if (id === 'SEARCH_DB_FOR_CARDS') {
    return new Promise(resolve => { 
      let theQuery = querydb(data)
      resolve(theQuery);
    }).then((result) => {
      console.log('do i get a results? ', result)
      return result;
    })
  }
};

module.exports = {
  convertString: convertString,
  getRequest: getRequest, 
  queryDatabase: queryDatabase
};