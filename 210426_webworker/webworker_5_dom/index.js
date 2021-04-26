'use strict';

import dom from './dom.js';

let inputZahl = document.querySelector('#inputZahl');
let btnIsPrime = document.querySelector('#btnIsPrime');
let ausgabe = document.querySelector('#ausgabe');

const checkEingabe = () => {

    const worker = new Worker('worker.js');

    const container = dom.create({
        eltern: ausgabe,
        klassen: ['container']
    })

    dom.create({
        eltern: container,
        typ: 'h4',
        inhalt: inputZahl.value
    })

    const progress = dom.create({
        eltern: container,
        typ: 'progress',
        attr: {
            max: 100,
            value: 0
        }
    })

    // Eine Zahl an den Worker senden
    worker.postMessage(inputZahl.value);

    worker.onmessage = msg => {
        let data = msg.data;

        if (data.status == 'done') {

            progress.remove();
            dom.create({
                eltern: container,
                inhalt: String(data.ergebnis)
            })
        } else {
            progress.value = data.percent;
        }

    }

}

btnIsPrime.addEventListener('click', checkEingabe);

