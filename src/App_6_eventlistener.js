import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      x: 42
    };
    // this an Methoden zuweisen
    this.inkrementX = this.inkrementX.bind(this);
  } 

  erzeugeZahl(min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
  }

  inkrementX(){
    // console.log('klick');
    this.setState({
      x: this.state.x + 1
    }) 
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

        <button onClick={this.inkrementX}>
          Inkrement X
        </button>

      </>
    )
  }
}

export default App;
