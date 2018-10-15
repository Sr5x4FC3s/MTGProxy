const JSONDATA = require('./scryfallData/scryfall-oracle-cards.json');
const schema = require('../schema.js');
const mh = require('../helperFunctions/helper.js');
const mongoose = require('mongoose');
const url = `mongodb://localhost/cards`;

const generalSchema = schema.exportScryfall();
const Model = schema.cardEntry('Cards', generalSchema);

const createObjects = (data) => {
  let newArray = [];
  for (let i = 0; i < data.length; i++) {
    let newObject = {};
    newObject.name = data[i].name;
    newObject.data = data[i];
    newArray.push(newObject);
  }
  return newArray;
}

const convert2Models = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let entry = new Model(array[i]);
    newArray.push(entry);
  }
  return newArray;
}

const save = (array) => {
  let errorCount = 0;
  let count = 0;
  let loop = new Promise(resolve => {
  for (let i = 0; i < array.length; i++) { 
    let insertData = new Promise(resolve => {
      // array[i].save(err => {
      //   if (err) {
      //     errorCount++;
      //     console.log('error inserting data');
      //     return console.error(err);
      //   }
      //   console.log('successful insert');
      // })
      Model.create(array[i], function (err, res) {
        if (err) {
          console.log('An error has occurred while creating data in Mongo');
          return console.error(err);
        }
        if (count === i) {
          console.log('inserted');
          count +=10;
        } 
        // console.log('Card entry has successfully been created');
      resolve('complete');
    })
    // array[i].save((err) => {
    //   if (err) {
    //     errorCount ++;
    //     console.log('An error has occurred while inserting data into Mongo');
    //     return console.error(err);
    //   }
    //   // console.log('Card entry has successfully been saved');
    // })
    })
  }
  resolve('completed loop')
})
  return 'Completed data entry' + 'error count :'+ errorCount;
}

let establishConnection = (callback) => {
  mongoose.connect(url, {useCreateIndex: true, poolSize: 50, useNewUrlParser: true, socketTimeoutMS: 30000, keepAlive: true, reconnectTries: 30000});
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'An error had occur when establishing a mongoose connection'));

  db.once('open', () => {
    console.log('Mongoose Connection has been established successfully!');
  });

  return db;
};

const insertData = (array) => {
  return new Promise (resolve => {
    establishConnection();
    resolve('connected');
  }).then(() => {

    console.log('i got here', array.length);
    return new Promise (resolve => {
      let createData = createObjects(array);
      console.log('i got here too', createData.length);
      resolve(createData);
      if (count === i) {
      console.log('inserted')
    } 
  })
  })
  .then(result => {
      console.log('f', result.length)
      return new Promise(resolve => {
        console.log('duhhh i got here')
        let saveData = save(result);
        resolve(saveData);
      }).then(result => {
        console.log('database has been completely seeded with 19000 + entries of cards!');
      })
    })
}

//<------------Note: script will timeout on mongoose connections at the end of the inserting, need to fix bug in the future ----------->

insertData(JSONDATA);
