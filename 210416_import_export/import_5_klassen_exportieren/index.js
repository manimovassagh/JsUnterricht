'use strict';


import fahrzeuge from './auto.js';

let meinAuto = new fahrzeuge.Auto('VW', 'Passat');
let meinBus = new fahrzeuge.Bus('Setra', 'Explorer', 12);

console.log(meinAuto);
console.log(meinBus);

meinAuto.turnOn();

fahrzeuge.Auto.irgendwas();
fahrzeuge.Bus.irgendwas();

