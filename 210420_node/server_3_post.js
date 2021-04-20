'use strict';

const fs = require('fs');
const express = require('express');
const server = express();

// MIDDLEWARE
server.use((req, res, next) => {
    console.log(req.url);
    next();
})
// Middleware zum Zugriff auf die Nutzdaten einer Post-Anfrage
server.use(express.json());

server.use(express.static('public', {
    extensions: ['html']
}));

// ROUTE
server.post('/multiply', (req, res) => {
    // console.log(req.body);
    // Ergebnis der Multplikation in eine Objekt einpacken und zurückgeben
    res.send(JSON.stringify({
        x: req.body.x,
        y: req.body.y,
        erg: req.body.x * req.body.y
    }));
})



const init = () => {
    server.listen(80, err => console.log(err || 'Server läuft'));
}

init();
