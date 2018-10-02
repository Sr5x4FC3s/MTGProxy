const axios    = require('axios');
const React    = require('react');
const bluebird = require('bluebird');

export const postDeck = (state) => {
  let data = state;
  console.log(state);
  console.log(data);
  //will need to add an ID for each deck submission so they can be tracked in the database
  axios.post(`/decksubmission`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
