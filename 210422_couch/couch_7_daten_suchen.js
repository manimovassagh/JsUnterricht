'use strict';


const db = require('nano')('http://admin:abc123@localhost:5984').db;

const dbName = 'beispiel';

const dbBeispiel = db.use(dbName);

/* Einfache Abfrage
dbBeispiel.find({
    selector:{
        marke: 'Hyundai'
    }
}).then(
    // Nur das docs-Array heraus holen
    data => data.docs
).then(
    data => console.log(data)    
).catch(
    console.log    
)
*/

// Mit Logik
dbBeispiel.find({
    selector:{
        leistungKW:{
            '$gt': 100
        },
        marke: 'VW'
    }
}).then(
    // Nur das docs-Array heraus holen
    data => data.docs
).then(
    data => console.log(data)    
).catch(
    console.log    
)
