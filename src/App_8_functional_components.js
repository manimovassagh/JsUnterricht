import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Ueberschrift inhalt="Meine Überschrift" />

        <Ptag inhalt="Das ist mein Inhalt" />
        <Ptag inhalt="Mehr Inhalt" />
        <Ptag inhalt="Der letzte Inhalt" />

      </>
    )
  }
}

// Functional Components sind einfacher, bieten aber keinen State
const Ueberschrift = props =>
  <h2>
    {props.inhalt}
  </h2>


const Ptag = props =>
  <p className="rot">
    {props.inhalt} <br />
    <span className="count">
      ({props.inhalt.length} Zeichen)
        </span>
  </p>

export default App;
