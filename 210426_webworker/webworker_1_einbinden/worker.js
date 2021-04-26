'use strict';

self.onmessage = msg => {

    // gibt einen String an den Client zurück, der die Ausgabe dann realisiert
    // console.log(msg.data);

    let data = msg.data * 2;

    // Nachricht zum Client senden
    self.postMessage(data);

}