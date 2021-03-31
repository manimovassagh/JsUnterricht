'use strict';

const fs = require('fs');
const express = require('express');
const server = express();

server.use(express.static('public', {
    extensions: ['html']
}));
server.use(express.json());

server.get('/getData', (req, res) => {
    let fileType = req.query.fileType;
    if (fileType) {
        fs.readFile(
            `data/data.${fileType}`,
            (err, data) => {
                if (err) res.send('[]');
                else res.send(data.toString());
            }
        )
    } else {
        res.send('[]')
    }
})

server.post('/multiply', (req, res) => {
    console.log(req.body);
    
    res.send(String(req.body.x * req.body.y));
})

const init = () => {
    server.listen(80, err => console.log(err || 'Server läuft'));
}

init();