import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Ueberschrift inhalt="Meine Überschrift" />
        <Inhalte />
      </>
    )
  }
}


class Inhalte extends React.Component {
  constructor() {
    super();
    this.state = {
      inhalte: [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.'
      ],
      eingabe: 'leer'
    }
    // Binding des this-Elementes
    this.updateEingabe = this.updateEingabe.bind(this);
    this.inhaltEintragen = this.inhaltEintragen.bind(this);
  }

  erzeugeKomponenten() {
    return this.state.inhalte.map((el, index) => <Ptag inhalt={el} key={index} />)
  }

  updateEingabe(evt){
    // console.log(evt.target.value);
    this.setState({
      eingabe: evt.target.value
    })
  }

  inhaltEintragen(){
    this.setState({
      inhalte: [...this.state.inhalte, this.state.eingabe],
      eingabe: ''
    })
  }

  render() {
    return (
      <>
        <div>
          {this.erzeugeKomponenten()}
          <input
            type="text"
            onChange={this.updateEingabe}
            value={this.state.eingabe}
          />
          <button onClick={this.inhaltEintragen}>Inhalt eintragen</button>
        </div>
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
