'use strict';


const db = require('nano')('http://admin:abc123@localhost:5984').db;

const dbName = 'beispiel';

const dbBeispiel = db.use(dbName);

dbBeispiel.insert({
    marke: 'Hyundai',
    modell: 'i30'
}).then(
    data => console.log(data)
).catch(
    console.log
)
