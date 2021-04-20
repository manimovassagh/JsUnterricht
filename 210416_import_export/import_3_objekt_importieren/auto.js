'use strict';

import chLib from './chLib.js';

let wert = 18;

export default {
    marke: 'Hyundai',
    modell: 'i30',
    leistungKW: 74,
    keyNo: chLib.erzeugeZufall(1,1e16),
    ausgabe(meinParameter) {
        let x = 12;
        // Das Modul behält seinen scope in der Modul-Datei. 
        // Globale Variablen aus der Hauptdatei existieren hier nicht.
        console.log(x);
        console.log(wert);
        console.log(`Ausgabe: ${meinParameter}`);
    }
};
