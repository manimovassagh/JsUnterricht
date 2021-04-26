'use strict';

const checkPrime = zahl => {
    for (let i = 2; i < zahl; i++) {
        // Nach 1 Mio Iterationen, Progress-Status versenden
        if (!(i % 1e6)) {
            self.postMessage({
                status: 'pending',
                percent: 100 / zahl * i, 
                frage: zahl
            })  
        }

        if (!(zahl % i)) {
            return false;
        }
    }
    return true;
}

self.onmessage = msg => {
    if (checkPrime(msg.data)) {
        self.postMessage({
            status: 'done',
            ergebnis: true,
            frage: msg.data
        })
    } else {
        self.postMessage({
            status: 'done',
            ergebnis: false,
            frage: msg.data
        })
    }

}