'use strict';

let btnIsPrime = document.querySelector('#btnIsPrime');


const checkEingabe = () => {

    const worker = new Worker('worker.js');

    // Eine Zahl an den Worker senden
    worker.postMessage(42);

    worker.onmessage = msg => {
        console.log(msg.data);
        
    }

   //console.log(checkPrime(inputZahl.value));

}

btnIsPrime.addEventListener('click', checkEingabe);

