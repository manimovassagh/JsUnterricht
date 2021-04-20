'use strict';

const meinFormular = document.querySelector('#meinFormular');
const btnSend = document.querySelector('#btnSend');

const senden = evt => {
    evt.preventDefault();

    const formRequest = new Request(
        '/fileupload',
        {
            method: 'post',
            // Kein Headers, weil formdata der Standard ist
            body: new FormData(meinFormular)
        }
    );

    fetch(formRequest).then(
        req => req.text()
    ).then(
        data => console.log(data)
    ).catch(
        console.log()
    )
    
}


btnSend.addEventListener('click', senden);