'use strict';

// const ausgabe = document.querySelector('#ausgabe');
const ausgabe = $('#ausgabe');

let container = DOMcreate('', 'div', 'container', ausgabe);
DOMcreate('meine Überschrift', 'h3', false, container);
DOMcreate('Dies ist irgendein Text', 'p', false, container);
DOMcreate('Noch ein Text', 'p', false, container);
DOMcreate(erzeugeZahl(1,6), 'p', false, container);

const pTags = $$('p');
console.log(pTags);
