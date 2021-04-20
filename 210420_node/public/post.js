'use strict';

const inputX = document.querySelector('#inputX');
const inputY = document.querySelector('#inputY');
const btnSend = document.querySelector('#btnSend');
const ausgabe = document.querySelector('#ausgabe');

const anfrage = () => {
    const meinRequest = new Request(
        '/multiply',
        {
            method: 'post',                                         // zu verwendende Methode (post, put, update, delete, etc.)
            headers: {'content-type': 'application/json'},          // Wie werden die Daten formatiert (json, text, form, etc.)
            body:JSON.stringify({x:inputX.value, y: inputY.value})  // Nutzdaten
        }
    )

    fetch(meinRequest).then(
        res => res.json()
    ).then(
        data => ausgabe.innerHTML += `${data.x} * ${data.y} = ${data.erg}<br />`    // Antwort in die Konsole schreiben
    ).catch(
        console.log                 // Fehlermeldung in die Konsole schreiben
    )
}

btnSend.addEventListener('click', anfrage);
