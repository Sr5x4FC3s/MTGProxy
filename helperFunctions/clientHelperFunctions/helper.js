const axios    = require('axios');
const React    = require('react');
const bluebird = require('bluebird');

//function is used to send a string to the server to be processed
export const postCards = (state, endPoint) => {
  let data = state;
  console.log('from postcard func, this is state: ', data)

  return axios.post(endPoint, data)
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

  return axios.get(`/cardretrieval/${arrayString}`, data)
    .then(response => {
      console.log('axios get request was successful');
      console.log('Cards have been retrieved from database!', response);
      return response;
    })
    .catch(error => {
      console.log(error);
    })
};

export const convertString = (string) => {
  let nameArray = string.split(':');
  return nameArray;
};

export const removeWhiteSpaces = (array) => {
  let nameArray = [];

  for (let i = 0; i < array.length; i++) {
    nameArray.push(array[i].trim());
  }
  return nameArray;
};

export const removeCardFromList = (array, name) => {
  let index = array.indexOf(name);
  let copyArray = array.splice(index, 1);

  return array;
};

export const queryDeck = (string) => {
  return axios.get(`/retrievedeck/${string}`, string)
  .then(response => {
    console.log('request has been made', response);
    return response.data;
  })
  .catch(error => {
    console.log(error);
  })
};

export const query4AllDecks = () => {
  return axios.get(`/retrieveAllDecks`)
  .then(response => {
    console.log('request has been made', response);
    return response.data;
  })
  .catch(error => {
    console.log(error);
  })
};

export const grabObject = (array, targetDeckName) => {
  let selectedObject;
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === targetDeckName) {
      selectedObject = array[i];
      break;
    }
  }
  return selectedObject;
};

export const convertObject2Array = (object) => {
  let array = [];

  for (let key in object) {
    array.push(`${key} : ${object[key]}`)
  }
  return array;
};