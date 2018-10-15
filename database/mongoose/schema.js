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


//additional schema for deck entries
let exportSchema2 = () => {
  let cardSchema = new mongoose.Schema({
    name: {type: String, lowercase: true, required: true, index: {unique: true, sparse: false}},
    list : [String], 
    type: String
  });
  return cardSchema;
};

//<----------Scryfall data seeding schema------------->

//Example of data shape

// { object: 'card',
//     id: '5e4304f1-987b-4e4f-a321-c3263bd916de',
//     oracle_id: '013c42a4-d555-46c9-9d57-b50d6b59ae9e',
//     multiverse_ids: [ 201291 ],
//     mtgo_id: 33662,
//     mtgo_foil_id: 33663,
//     name: 'Heal',
//     lang: 'en',
//     uri: 'https://api.scryfall.com/cards/5e4304f1-987b-4e4f-a321-c3263bd916de',
//     scryfall_uri: 'https://scryfall.com/card/me3/14/heal?utm_source=api',
//     layout: 'normal',
//     highres_image: true,
//     image_uris: 
//      { small: 'https://img.scryfall.com/cards/small/en/me3/14.jpg?1517813031',
//        normal: 'https://img.scryfall.com/cards/normal/en/me3/14.jpg?1517813031',
//        large: 'https://img.scryfall.com/cards/large/en/me3/14.jpg?1517813031',
//        png: 'https://img.scryfall.com/cards/png/en/me3/14.png?1517813031',
//        art_crop: 'https://img.scryfall.com/cards/art_crop/en/me3/14.jpg?1517813031',
//        border_crop: 'https://img.scryfall.com/cards/border_crop/en/me3/14.jpg?1517813031' },
//     mana_cost: '{W}',
//     cmc: 1,
//     type_line: 'Instant',
//     oracle_text: 'Prevent the next 1 damage that would be dealt to any target this turn.\nDraw a card at the beginning of the next turn\'s upkeep.',
//     colors: [ 'W' ],
//     color_identity: [ 'W' ],
//     legalities: 
//      { standard: 'not_legal',
//        future: 'not_legal',
//        frontier: 'not_legal',
//        modern: 'not_legal',
//        legacy: 'legal',
//        pauper: 'legal',
//        vintage: 'legal',
//        penny: 'not_legal',
//        commander: 'legal',
//        '1v1': 'legal',
//        duel: 'legal',
//        brawl: 'not_legal' },
//     reserved: false,
//     foil: true,
//     nonfoil: true,
//     oversized: false,
//     reprint: true,
//     set: 'me3',
//     set_name: 'Masters Edition III',
//     set_uri: 'https://api.scryfall.com/sets/me3',
//     set_search_uri: 'https://api.scryfall.com/cards/search?order=set&q=e%3Ame3&unique=prints',
//     scryfall_set_uri: 'https://scryfall.com/sets/me3?utm_source=api',
//     rulings_uri: 'https://api.scryfall.com/cards/5e4304f1-987b-4e4f-a321-c3263bd916de/rulings',
//     prints_search_uri: 'https://api.scryfall.com/cards/search?order=set&q=%21%E2%80%9CHeal%E2%80%9D+include%3Aextras&unique=prints',
//     collector_number: '14',
//     digital: true,
//     rarity: 'common',
//     flavor_text: '"Sometimes even the smallest boon can save a life." —Halvor Arenson, Kjeldoran Priest',
//     illustration_id: 'e1ae21d4-157c-423b-aff0-8f5594c54297',
//     artist: 'Mark Tedin',
//     frame: '1997',
//     full_art: false,
//     border_color: 'black',
//     timeshifted: false,
//     colorshifted: false,
//     futureshifted: false,
//     story_spotlight: false,
//     edhrec_rank: 17496,
//     related_uris: 
//      { gatherer: 'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=201291',
//        tcgplayer_decks: 'http://decks.tcgplayer.com/magic/deck/search?contains=Heal&page=1&partner=Scryfall',
//        edhrec: 'http://edhrec.com/route/?cc=Heal',
//        mtgtop8: 'http://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Heal' } }

let exportScryfallSchema = () => {
  let cardObject = new mongoose.Schema({
    name: {type: String, lowercase: true, uppercase: true, required: true, index: {unique: true, sparse: false}},
    data: [{}]
  });
  return cardObject;
}

module.exports = {
  cardEntry : cardEntry,
  exportSchema : exportSchema,
  exportSchema2 : exportSchema2,
  exportScryfall: exportScryfallSchema
};