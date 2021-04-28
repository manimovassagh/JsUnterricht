import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          Hallo Alle
        </h1>

        <Ptag inhalt="Das ist mein Inhalt" />
        <Ptag inhalt="Mehr Inhalt" />
        <Ptag inhalt="Der letzte Inhalt" />
        
      </>
    )
  }
}

// Komponenten müssen mit einem Großbuchstaben beginnen
class Ptag extends React.Component {
  render(){
    return (
      <p className="rot">
        {this.props.inhalt} <br />
        <span className="count">
          ({this.props.inhalt.length} Zeichen)
        </span>
      </p>
    )
  }
}

export default App;
