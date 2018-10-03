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
    console.log('searching for these cards : ', data);

    data.forEach(cardName => {
      mtg.card.where({name: cardName.trim()})
      .then((results) => {
        console.log(results)
      })
      .catch((err) => {
        console.log(err);
      })
    })
  }
};
