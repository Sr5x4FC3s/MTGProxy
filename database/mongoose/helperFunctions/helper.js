const schema = require('../schema.js');

const cardSchema = schema.exportSchema();
const deckSchema = schema.exportSchema2(); // new schema
const scrySchema = schema.exportScryfall();
const Model = schema.cardEntry('Card', cardSchema);
const Model2 = schema.cardEntry('Deck', deckSchema); // new model
const Model3 = schema.cardEntry('Cards', scrySchema);

const createNewObjects = (data, model, model2) => {
  let modelArray = [];
  if (model2 === undefined) {
    for (let j = 0; j < data.length; j++) {
      let card = new model(data[j]);
      modelArray.push(card);
    }
    return modelArray;
  } else if (model === undefined) {
    for (let i = 0; i < data.length; i++) {
      let card = new model2(data[i]);
      modelArray.push(card);
    }
    return modelArray;
  }
}

const save = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].save((err) => {
      if (err) {
        console.log('An error has occurred while inserting data into Mongo');
        return console.error(err);
      }
      console.log('Card entry has successfully been saved');
    })
  }
  return 'Completed data entry';
}

const insert = (data) => {
  let promise = new Promise ((resolve, reject) => {
    let newData = createNewObjects(data, Model);
    resolve(newData);
  }).then((result) => {
    return new Promise ((resolve, reject) => {
      let saveData = save(result);
      resolve(saveData);
    })
  }).then((result) => {
    console.log('data has been saved successfully to database and last of the promise chain has been reached');
  })

  return promise;
};

//combine insert and insertDeck => use a string id to verify which data is being passed
const insertDeck = (data) => {
  // let data2submit = createObjectConvertArray(undefined, undefined, undefined);
  let promise = new Promise ((resolve, reject) => {
    let newData = createNewObjects(data, undefined, Model2);
    resolve(newData);
  }).then((result) => {
    return new Promise ((resolve, reject) => {
      let saveData = save(result);
      resolve(saveData);
    })
  }).then((result) => {
    console.log('deck has been saved successfully to database and last of the promise chain has been reached');
  })

  return promise;
}

const anotherInsert = (data) => {
  Model.create(data, (err, res) => {
    if (err) {
      console.log('An error has occurred while creating data in Mongo');
      return handleError(err);
    }
    console.log('Card entry has successfully been created');
  })
}

const queryName = (data) => {
  let promise = new Promise ((resolve, reject) => {
    let queryDatabase = () => {
      return new Promise((resolve, reject) => {
        let things = queryScry(data);
        resolve(things);
      })
    }
    resolve(queryDatabase());
  }).then((result) => {
    return result;
  })
  return promise;
}

const query = (array) => {
  let query = Model.find({name : { $in : array}})
  let promise = query.exec();
  return promise;
}

const queryDecks = () => {
  let query = Model2.find()
  let promise = query.exec();
  return promise;
}

//<--------- query pre seeded database ---------->

const queryScry = (array) => {
  let query = Model3.find({name : { $in : array}})
  let promise = query.exec();
  return promise;
}

//<--------- query by deck name ---------->

const queryByDeckName = (deckName) => {
  let query = Model2.find({name : deckName})
  let promise = query.exec();

  return promise;
}

const queryOneDeck = (name) => {
  let promise = new Promise((resolve, reject) => {
    let queryDatabase = () => {
      return new Promise((resolve, reject) => {
        let deck = queryByDeckName(name);
        resolve(deck);
      })
    }
    resolve(queryDatabase());
  }).then(result => {
    return result;
  });
  return promise;
}

const queryAllDecks = () => {
  let promise = new Promise((resolve, reject) => {
    let queryDatabase = () => {
      return new Promise((resolve, reject) => {
        let decks = queryDecks();
        resolve(decks);
      })
    }
    resolve(queryDatabase());
  }).then(result => {
    return result;
  });
  return promise;
}

module.exports = {
  insertInstance : insert,
  insertModel : anotherInsert,
  queryName : queryName,
  insertDeck : insertDeck,
  queryOneDeck : queryOneDeck,
  queryAllDecks : queryAllDecks
};