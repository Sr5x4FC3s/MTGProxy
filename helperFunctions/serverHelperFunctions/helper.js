const axios    = require('axios');
const bluebird = require('bluebird');
const mtg      = require('mtgsdk');

module.exports = {
  convertString: (string) => {
    let nameArray = string.split(':');
    return nameArray;
  },
  getRequest: (array) => {
    let data = array;
    let findCards = findData(data);
    let foundCards = Promise.resolve(findData(data)).then((foundCards) => {
      console.log(foundCards, 'yoyoy');
    });
    console.log('searching for these cards : ', data);

    return findCards;
  }
};

const findData = (array) => {
  let data = array;
  let foundCards = [];

  return new Promise(resolve => {
    for (let i = 0; i < data.length; i++) {
      mtg.card.where({name: data[i].trim()})
      .then((results) => {
        foundCards.push(results[0]);
        console.log('then', foundCards);
        if (foundCards.length === data.length) {
          resolve(foundCards);
          console.log('found: ', foundCards);
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
}