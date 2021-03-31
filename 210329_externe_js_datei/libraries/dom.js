'use strict';

/*
Bibliothek mit den wichtigsten Operationen bzgl. des Document Object Models. 
*/

const DOMcreate = (inhalt, typ, klasse, eltern) => {
    let neu = document.createElement(typ);
    if (klasse) neu.className = klasse;
    if (inhalt) neu.innerHTML = inhalt;
    eltern.append(neu);
    return neu;
}

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));
