const schema = require('../schema.js');

const cardSchema = schema.exportSchema();
const Model = schema.cardEntry('Card', cardSchema);

const createNewObjects = (data) => {
  let modelArray = [];

  for (let j = 0; j < data.length; j++) {
    let card = new Model(data[j]);
    modelArray.push(card);
  }
  return modelArray;
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
    let newData = createNewObjects(data);
    resolve(newData)
  }).then((result) => {
    return new Promise ((resolve, reject) => {
      let saveData = save(result);
      resolve(saveData);
    })
  }).then((result) => {
    console.log('data has been saved successfully to database and last of the promise chain has been reached');
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
        let things = query(data);
        resolve(things);
      })
    }
    resolve(queryDatabase());
  }).then((result) => {
    console.log('results from queried database from within promise', result);
    return result;
  })
  return promise;
}

const query = (array) => {
  let query = Model.find({name : { $in : array}})
  let promise = query.exec();
  console.log('did this really exec promise?', promise);
  return promise;
}

module.exports = {
  insertInstance : insert,
  insertModel : anotherInsert,
  queryName : queryName
};