'use strict';

export default {
    erzeugeZufall(min, max) {
        return ~~(Math.random() * (max - min + 1) + min);
    }
}