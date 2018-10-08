const axios    = require('axios');
const React    = require('react');
const bluebird = require('bluebird');

//function is used to send a string to the server to be processed
export const postCards = (state) => {
  let data = state;
  console.log('from postcard func, this is state: ', data)

  return axios.post(`/cardsubmission`, data)
    .then((response) => {
      console.log('Cards have been found!', response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

//function is used to send a query to the database
export const queryCards = (state) => {
  let data = state;
  let arrayString = state.deckList;

  console.log('querying them cards', state);
  return axios.get(`/cardretrieval/${arrayString}`, data)
    .then(response => {
      console.log('axios get request was successful');
      console.log('Cards have been retrieved from database!', response);
      return response;
    })
    .catch(error => {
      console.log('error',error);
    })
}
