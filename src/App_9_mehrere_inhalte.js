import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      inhalte: [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.'
      ]
    }
  }

  // Diese Methode wird automatisch gestartet, sobald die Komponente in die Seite eingehängt wird.
  componentDidMount() {
    console.log('Hier könnte Ihr Ajax-Aufruf stehen.');
  }

  erzeugeKomponenten(){
    return this.state.inhalte.map((el, index) => <Ptag inhalt={el} key={index} />)
  }

  render() {
    return (
      <>
        <Ueberschrift inhalt="Meine Überschrift" />

        {this.erzeugeKomponenten()} 

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
