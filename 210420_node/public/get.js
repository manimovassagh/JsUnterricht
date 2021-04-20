'use strict';

let btnGetServerTime = document.querySelector('#getServerTime');
let btnGetServerHours = document.querySelector('#getServerHours');
let btnGetServerDate = document.querySelector('#getServerDate');

const datenFuerUhrLesen = (element = '') => {
    // Parameter für die Get-Methode werden mit einem ? in den Pfad eingetragen
    fetch(`/servertime?element=${element}`).then(
        res => res.text()
    ).then(
        data => {
            let neu = document.createElement('p');
            neu.innerHTML = data;
            document.querySelector('#uhr').append(neu);
        }
    )
}

btnGetServerTime.addEventListener('click', () => {
    datenFuerUhrLesen()
})

btnGetServerHours.addEventListener('click', () => {
    datenFuerUhrLesen('hours')
})

btnGetServerDate.addEventListener('click', () => {
    datenFuerUhrLesen('date')
})