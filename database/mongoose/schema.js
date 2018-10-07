const mongoose = require('mongoose');

let cardEntry = (type, schema) => {
  let entry = mongoose.model(type, schema);
  return entry;
};

let exportSchema = () => {
  let cardSchema = new mongoose.Schema({
    name: {type: String, lowercase: true, required: true, index: {unique: true, sparse: false}},
    manaCost: String,
    cmc: Number,
    colors: [String], 
    colorIdentity: [String],
    type: String,
    types: [String],
    rarity: String,
    set: String,
    setName: String, 
    text: String,
    flavor: String,
    artist: String,
    number: String,
    power: String,
    toughness: String,
    layout: String,
    releaseDate: String,
    foreignNames: [{}],
    printings: [String],
    multiverseid: Number,
    imageUrl: String,
    watermark: String,
    printings: [String],
    originalText: String,
    originalType: String,
    legalities: [{}],
    id: String
  });;
  return cardSchema;
};


module.exports = {
  cardEntry : cardEntry,
  exportSchema : exportSchema
};