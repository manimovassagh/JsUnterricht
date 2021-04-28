import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        { /* Fragmente dienen der logischen Strukturierung, 
        ohne den Webseiteninhalt zu ändern */ }
        <h1>
          Hallo Alle
        </h1>

        <p>
          Das ist Inhalt
        </p>

        <p>
          {/* Nasenklammern enthalten ausführbaren JS-Code */}
          {~~(Math.random() * 100)}
        </p>
        
      </>
    )
  }
}

export default App;
