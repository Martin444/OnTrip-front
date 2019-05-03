import React, { Component } from 'react';
import BoxSearch from './components/boxSearch.jsx';
import CampoB from './components/campoB';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { origen:'', 
                    Estilo: {}, 
                    EstiloDes: {}, 
                    destino: '', 
                    passMen: '', passMax: '', 
                    CalInicio: null, CalFin: null}
    this.handleChangeSelect = this.handleChangeSelect.bind(this)
    this.handleChangeSelect2 = this.handleChangeSelect2.bind(this)
  }

  hdchange = (e) => {
    const { value } = e.target
    let Style = {}
    if (value.length >= 1) {
       Style = {
            top: '-15px',
            left: '0',
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#ffaa3b',
            transition: '.2s all'
        };
    } else {
        Style = {
            position: 'absolute',
            top: '5px',
            left: '2px',
            color: '#504f4e3f'
        };
    }
    this.setState({ origen: value, Estilo: Style });
}
hdChangeDestino = (e) =>{
  const {value} = e.target
  let Style2 = {}
  if (value.length >= 1) {
      Style2 = {
          top: '45px',
          left: '0',
          fontSize: '15px',
          fontWeight: 'bold',
          color: '#ffaa3b',
          transition: '.2s all'
      };
  } else {
      Style2 = {
          position: 'absolute',
          top: '45px',
          left: '2px',
          color: '#504f4e3f'
      };
  }
  this.setState({ destino: value,  EstiloDes: Style2  })
}

handleChangeSelect(event) {
  this.handleChangeSelect ?
    this.setState({passMax: event.target.passMax}) && console.log(this.passMax)
  : 
  console.log(this.passMax)
  }

handleChangeSelect2(event) {
  this.setState({passMen: event.target.passMen});
}


  render() {
    const {origen, Estilo, destino, EstiloDes, passMen, passMax, CalFin, CalInicio} = this.state
    return (
      <div className="App">
        <BoxSearch/>
        <br/>
          <div className="box">
            <CampoB origen = {origen}
            destino = {destino}
            passMen = {passMen}
            passMax = {passMax}
            CalFin = {CalFin}
            CalInicio = {CalInicio}
            Estilo = {Estilo}
            EstiloDes={EstiloDes}
            hdChangeDestino={this.hdChangeDestino}
            handleChangeSelect={this.handleChangeSelect}
            handleChangeSelect2={this.handleChangeSelect2}
            hdchange ={this.hdchange}
            />
            </div>
      </div>
    );
  }
}

export default App;
