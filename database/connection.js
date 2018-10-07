const MongoClient = require('mongodb').MongoClient;
const assert      = require('assert');
const url = `mongodb://localhost:27017/`;

let connection = []; // maybe better by initializing as let connection;

let establishConnection = (callback) => {
  MongoClient.connect(url, {poolSize: 10}, (err, db) => {
    assert.equal(null, err);
    if (err) {
      console.log('this shit fucking errored again and it wants to take a shit on willy\'s front lawn')
      return process.exit(1);
    }
    console.log('MongoDB connection has been established: Carry on...')
    connection = db;
    //connection === db 

    if (typeof callback === 'function' && callback()) {
      callback(connection);
    }
  })
}

let retrieveConnection = () => {
  return connection;
}

module.exports = {
  establishConnection : establishConnection,
  retrieveConnection : retrieveConnection
}