'use strict';

import chLib from './chLib.js';

const auto = {
    marke: 'Hyundai',
    modell: 'i30',
    leistungKW: 74,
    keyNo: chLib.erzeugeZufall(1,1e16),
    ausgabe(meinParameter) {
        let x = 12;
        console.log(x);
        console.log(`Ausgabe: ${meinParameter}`);
    },
    motor:{
        get leistungPS(){
            //console.log(auto.leistungKW);
            return auto.leistungKW / .73;
        }
    }
};

export default auto;