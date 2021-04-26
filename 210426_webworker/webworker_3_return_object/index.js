'use strict';

let inputZahl = document.querySelector('#inputZahl');
let btnIsPrime = document.querySelector('#btnIsPrime');
let ausgabe = document.querySelector('#ausgabe');

const checkEingabe = () => {

    const worker = new Worker('worker.js');

    // Eine Zahl an den Worker senden
    worker.postMessage(inputZahl.value);

    worker.onmessage = msg => {
        let data = msg.data;
        console.log(`${data.frage}: ${data.ergebnis}`);
        
    }

}

btnIsPrime.addEventListener('click', checkEingabe);

