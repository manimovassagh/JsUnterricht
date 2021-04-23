'use strict';


const db = require('nano')('http://admin:abc123@localhost:5984').db;

const dbName = 'beispiel';

const dbBeispiel = db.use(dbName);

dbBeispiel.insert({
    _id: '8c81964757499ec76660cbc5130051be',
    _rev: '3-d68c2d92c0e2e73ebb213896c9398945',
    leistungKW: 150,
    marke: 'Hyundai',
    modell: 'i30'
}).then(
    data => console.log(data)

).catch(
    console.log

)