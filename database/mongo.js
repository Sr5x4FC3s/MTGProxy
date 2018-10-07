const MongoClient = require('mongodb').MongoClient;
const assert      = require('assert');
const url = `mongodb://localhost:27017/`;

const db          = require('./connection.js');

//will need to make a second param in func args for type and create a interchangable collection name for 'decks' and etc
const insert = (data) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    // if (err) throw err;
    if (err) {
      console.log('error occured in insert function');
    } else {
      console.log('established connection: 1');
    }
    // assert.equal(null, err);

    db = client.db('cards');

    db.collection('cards').insertMany(data, (err, res) => {
      if (err) {
        console.log(`${data[0].name} already exists in the database`);
      }
    })

    db.collection('cards').createIndex( { 'name' : 1 }, {unique:true}, {collation: {locale: 'en', strength:2}} )

    // client.close();
    console.log(`cards have been inserted`);
  })
}

const search = (array, callback) => {
  // let cardNames = array;

  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    // if (err) throw err;
    if (err) {
      console.log('there was an error ', err);
    } else {
      console.log('established connection: 2', client);
    }
    // assert.equal(null, err);

    // db = client.db('cards');

    // db.collection('cards').find({ name : { $in : array }}).toArray((err, res) => {
    //   if (err) {
    //     console.log('there was a error trying to search for a card');
    //   }
    //   console.log('this is the query response, ', res);
    // })
    // client.close();
  })
};


const databaseQuery = (array, connection, callback) => {
  // let database = connection;
  let database = db.retrieveConnection();
  let collection = database.collection('cards');

  console.log('this is the collection', collection)
  // database.collection('cards').find({ name : { $in : array }}).toArray((err, res) => {
    
  collection.find({ name : { $in : array }}).toArray((err, res) => {
    if (err) {
      console.log('there was a error trying to search for a card');
      // db.close();
    }
    console.log('this is the query response, ', res);
  })
}

const databaseInsert = (array, connection) => {
  let database = connection;
  let collection = database.db('cards');
  console.log('collection', collection);
  collection.createCollection('cards', (err, res) => {
    if (err) { 
      console.log('there was an err');
    }
    console.log('collection cards has been created');
  })

  collection('cards').insertMany(array, (err, res) => {
    // collection.insertMany(array, (err, res) => {
    if (err) {
      console.log(`${data[0].name} already exists in the database`);
    }
  })

  //card indexes arex case insensitive
  database.collection('cards').createIndex( { 'name' : 1 }, {unique:true}, {collation: {locale: 'en', strength:2}} )

  // client.close();
  console.log(`cards have been inserted`);
}

// module.exports.insert = insert;
// module.exports.search = search;

module.exports = {
  insert : insert,
  search : search,
  databaseQuery : databaseQuery,
  databaseInsert : databaseInsert
}