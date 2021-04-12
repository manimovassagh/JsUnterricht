'use strict';

const erzeugeZahl = (min, max) => ~~(Math.random() * (max - min + 1) + min);

const erzeugeArray = (anzahl, min, max) => {
    let neuesArray = [];
    while (neuesArray.length < anzahl) {
        neuesArray.push(erzeugeZahl(min, max));
    }
    return neuesArray;
}