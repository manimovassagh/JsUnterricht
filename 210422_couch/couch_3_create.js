'use strict';


const db = require('nano')('http://admin:abc123@localhost:5984').db;

const dbName = 'beispiel';

db.list().then(
    dbs => {
        // Bevor die DB angelegt wird, sollte zunächst geprüft werden, ob es sie schon gibt
        if (dbs.includes(dbName)) {
            return true;
        } else {
            // Wenn DB nicht gefunden wurde, lege sie an und leifere die Antwort ins verkettete then
            return db.create(dbName);
        }
    }
).then(
    data => console.log(data)
).catch(
    console.log
)