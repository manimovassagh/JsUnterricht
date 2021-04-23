'use strict';


const db = require('nano')('http://admin:abc123@localhost:5984').db;

const dbName = 'beispiel';

const dbBeispiel = db.use(dbName);

dbBeispiel.destroy(
    '8c81964757499ec76660cbc5130051be',
    '4-1febf9cb9f5180d759b0c632e4132395'
).then(
    data => console.log(data)

).catch(
    console.log

)