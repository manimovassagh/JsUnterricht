'use strict';


const db = require('nano')('http://admin:abc123@localhost:5984').db;

const dbName = 'beispiel';

const dbBeispiel = db.use(dbName);


dbBeispiel.view('myDesignDoc', 'myView').then(
    data => data.rows.map(el => el.value)
).then(
    data => console.log(data)
).catch(
    console.log
)