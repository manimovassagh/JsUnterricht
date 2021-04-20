'use strict';

const express = require('express');

// console.log(express);
const server = express();

server.use(express.static('public'));

// console.log(server);

// 80 bezieht sich auf den HTTP-Standard-Port
server.listen(8080, err => {
    if (err) console.log(err);
    else console.log('Server läuft');
})
