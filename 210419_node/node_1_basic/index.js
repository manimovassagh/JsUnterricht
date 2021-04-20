'use strict';

let meinArray = [...new Array(100)].map(el => ~~(Math.random()*100));

console.log( meinArray.reduce((a,b) => a+b) );
