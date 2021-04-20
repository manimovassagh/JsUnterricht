'use strict';

// Auf diese Variable kann im Modul nicht zugegriffen werden
let wert = 100;

import meinAuto from './auto.js';

meinAuto.ausgabe(159);
console.log(meinAuto);

