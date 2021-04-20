'use strict';

const fs = require('fs');
const express = require('express');
const server = express();

// Verarbeitung von Formularen
const formidable = require('formidable');

// MIDDLEWARE
server.use((req, res, next) => {
    //console.log(req.url);
    next();
})
// Middleware zum Zugriff auf die Nutzdaten einer Post-Anfrage
server.use(express.json());

server.use(express.static('public', {
    extensions: ['html']
}));

// ROUTE
server.post('/fileupload', (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = 'public/uploads';
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) console.log(err);
        else {
            //console.log(files);
            res.send('Dateien erfolgreich gespeichert')
        }

    })
})


const init = () => {
    server.listen(80, err => console.log(err || 'Server läuft'));
}

init();
