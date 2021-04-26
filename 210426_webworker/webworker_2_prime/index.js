'use strict';

let inputZahl = document.querySelector('#inputZahl');
let btnIsPrime = document.querySelector('#btnIsPrime');
let ausgabe = document.querySelector('#ausgabe');

const checkEingabe = () => {

    const worker = new Worker('worker.js');

    // Eine Zahl an den Worker senden
    worker.postMessage(inputZahl.value);

    worker.onmessage = msg => {
        console.log(msg.data);
        
    }

}

btnIsPrime.addEventListener('click', checkEingabe);

