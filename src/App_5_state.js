import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      x: 42
    };
  }

  erzeugeZahl(min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
  }

  render() {
    return (
      <>
        <h1>
          Hallo Alle
        </h1>

        <p>
          Das ist Inhalt
        </p>

        <p>
          {~~(Math.random() * 100)}
        </p>
        
        <p>
          {this.erzeugeZahl(100, 200)}
        </p>

        <p>
          {this.state.x}
        </p>

      </>
    )
  }
}

export default App;
