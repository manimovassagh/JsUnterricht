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

        if (data.status == 'done') {
            console.log(`${data.frage} erledigt: ${data.ergebnis}`);
        }   else {
            console.log(`${data.frage} progress: ${data.percent}%`);
        }

    }

}

btnIsPrime.addEventListener('click', checkEingabe);

