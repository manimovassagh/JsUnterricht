'use strict';

const dns = require('dns');

// console.log(dns);

dns.lookup('alfatraining.de', (err, adresse) => {
    if (err) {
        console.log(err);
    } else {
        console.log(adresse);        
    }
})
