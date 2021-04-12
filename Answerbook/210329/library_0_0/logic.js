'use strict';

let z = erzeugeArray(10, 1, 6);
z.sort((a, b) => a - b);
console.log(z.join(' '));
