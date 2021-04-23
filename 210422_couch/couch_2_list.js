'use strict';

/* Vollständig, Schritt für Schritt
const nano = require('nano');
const connection = nano('http://localhost:5984');
const db = connection.db;
console.log(db);
*/

// Komprimiert
const db = require('nano')('http://admin:abc123@localhost:5984').db;

// List() zeigt alle vorhandenen Datenbanken
db.list().then(
    data => console.log(data)
).catch(
    console.log    
)

