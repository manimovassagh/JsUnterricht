'use strict';

const dom = {
    create({
        inhalt = '',
        typ = 'div',
        eltern = false,
        klassen = [],
        attr = {},
        listeners = {},
        styles = {},
        amEnde = true,
    } = {}) {        
        let neu = document.createElement(typ);
        if (inhalt) neu.innerHTML = inhalt;
        if (klassen.length) neu.className = klassen.join(' ');

        /*
        console.log(listeners);
        console.log(Object.entries(listeners));
        */

        Object.entries(attr).forEach(el => neu.setAttribute(...el));
        Object.entries(listeners).forEach(el => neu.addEventListener(...el));
        /*
        Object.entries(listeners).forEach(el => {
            console.log(...el);            
            neu.addEventListener(el[0], el[1]);
        });
        */
        Object.entries(styles).forEach(style => neu.style[style[0]] = style[1]);
        if (eltern) {
            if (!amEnde && eltern.children.length) eltern.insertBefore(neu, eltern.children[0]);
            else eltern.append(neu);
        }
        return neu;
    }
}

export default dom;