const express         = require('express');
const bodyParser      = require('body-parser');
const path            = require('path');
const cors            = require('cors');
const connectMongoose = require('../database/mongoose/connect.js');
const routes          = require('./routes.js');

const PORT = 3003;

const app = express();

connectMongoose.establishConnection();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist')));

app.use('/', routes);

app.listen(PORT, () => { console.log(`server is connected to port ${PORT}`)});
