'use strict';

const fs = require('fs');
const express = require('express');
const server = express();

// MIDDLEWARE
server.use((req, res, next) => {
    console.log(req.url);
    next();
})

server.use(express.static('public', {
    extensions: ['html']
}));

// ROUTE
server.get('/servertime', (request, response) => {
    // console.log(request.query);
    // Die Query nehmen wir als Unterscheidung, welchen Teil der Zeit wir haben wollen
    switch (request.query.element) {
        case 'hours':
            // Da eine Übergabe einer Number als Statuscode fehlinterpretiert wird, muss die Antwort ein String sein
            response.send(String(new Date().getHours()));
            break;
        case 'minutes':
            response.send(String(new Date().getMinutes()));
            break;
        case 'date':
            response.send(String(new Date().getDate()));
            break;
        default:
            response.send(new Date().toLocaleTimeString());
            break;
    }
});



const init = () => {
    server.listen(80, err => console.log(err || 'Server läuft'));
}

init();
