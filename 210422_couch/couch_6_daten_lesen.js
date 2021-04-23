'use strict';


const db = require('nano')('http://admin:abc123@localhost:5984').db;

const dbName = 'beispiel';

const dbBeispiel = db.use(dbName);

// Ohne Nutzdaten
/*
dbBeispiel.list().then(
    data => console.log(data)
).catch(
     console.log
)
*/

/* Auflistung mit Nutzdaten
dbBeispiel.list({
    include_docs: true
}).then(
    // Aus den Datensätzen nur die Dokument-Daten auslesen
    data => data.rows.map(el => el.doc)
).then(
    data => console.log(data)
).catch(
    console.log
)
*/

// direkt auf die ID zugreifen
dbBeispiel.get('8c81964757499ec76660cbc513006db2').then(
    data => console.log(data)    
).catch(
    console.log    
)

