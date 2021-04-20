'use strict';

class Auto {
    constructor(marke, modell) {
        this.marke = marke;
        this.modell = modell;
    }
    turnOn(){
        console.log('Wrooom!');
        
    }
    // Statische Methoden bleiben in der Klasse und lassen sich nicht über die erzeugten Objekte aufrufen
    static irgendwas(){
        console.log('irgendwas');   
    }
}

class Bus extends Auto {
    constructor(marke, modell, sitze) {
        super(marke, modell);
        this.sitze = sitze;
    }
}

export default { Auto, Bus };