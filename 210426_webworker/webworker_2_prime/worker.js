'use strict';

const checkPrime = zahl => {
    for (let i = 2; i < zahl; i++) {
        if (!(zahl % i)) {
            return false;
        }
    }
    return true;
}

self.onmessage = msg => {

    if (checkPrime(msg.data)) {
        self.postMessage(true)
    } else {
        self.postMessage(false)
    }

}