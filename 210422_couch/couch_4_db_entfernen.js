'use strict';


const db = require('nano')('http://admin:abc123@localhost:5984').db;

const dbName = 'beispiel';

db.list().then(
    dbs => {
        // Bevor die DB gelöscht wird, sollte zunächst geprüft werden, ob es sie schon gibt
        if (dbs.includes(dbName)) {
            return db.destroy(dbName);
        } else {
            return true;
        }
    }
).then(
    data => console.log(data)
).catch(
    console.log
)