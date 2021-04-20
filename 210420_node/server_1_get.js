'use strict';

const express = require('express');
const server = express();

// MIDDLEWARE
server.use(express.static('public', {
    extensions: ['html']
}));


// ROUTE
server.get('/servertime', (request, response) => {
    // console.log(new Date().toLocaleTimeString());
    response.send(new Date().toLocaleTimeString());

});


// Pfad nicht gefunden
server.get('*', (request, response) => {
    // Diese Route wird auf jeden Fall gestartet, wenn keine vorige Erfolg hatte
    // D.h. Dies ist der Fehler "Pfad nicht gefunden"

    // Alternative 1: Fehlermeldung als String generieren
    // response.send(`<h1>Pfad ${request.url} wurde nicht gefunden.<br />So kann ich nicht arbeiten 🤯`)

    // Alternative 2: Fehlermeldung aus Datei laden
    fs.readFile(
        'public/404.html',
        (err, data) => {
            // Wenn Datei nicht geladen werden konnte, Fehlermeldung ausgeben
            if (err) console.log(err);
            else {
                // Wenn Datei erfolgreich geladen wurde, Inhalt verarbeiten
                response.send(data.toString());
            }
        }
    )
})

const init = () => {
    server.listen(80, err => console.log(err || 'Server läuft'));
}

init();
