import React, { Component } from 'react';
import BoxSearch from './components/boxSearch.jsx';
import CampoB from './components/campoB';
import moment from 'moment';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
      viajes: {
        origen:'', 
        destino: '', 
        passMen: '', passMax: '', 
        CalInicio: moment(), CalFin: moment()
      },  
                    Estilo: {}, 
                    EstiloDes: {}, 
                    EstiloCalendario: {},
                    EstiloCalendarioIn: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeSelect = this.handleChangeSelect.bind(this)
    this.handleChangeSelect2 = this.handleChangeSelect2.bind(this)
    this.handleChangeCalendario = this.handleChangeCalendario.bind(this)
    this.handleChangeCalendarioIn = this.handleChangeCalendarioIn.bind(this)
  }

  hdchange = (e) => {
    const { origen, value } = e.target
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
    this.setState({ viajes:{
      ...this.state.viajes,
      [origen]:value
    }, Estilo: Style });
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

handleChangeCalendario(data) {
  let Style;
  if (this.handleChangeCalendarioIn){
        console.log('hola');
      Style = {  
        position: 'absolute',
        top: '280px',
        left: '1px',
        pointerEvents: 'none',
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#ffaa3b',
        transition: '.5s all'
      }
  }else {
    Style = {
      position: 'absolute',
        top: '285px',
        left: '1px',
        pointerEvents: 'none',
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#ffaa3b',
        transition: '.5s all'
    }
  }
this.setState ({ CalFin: data, EstiloCalendario: Style });
}

handleChangeCalendarioIn(data) {
  let Style;
  if (this.handleChangeCalendarioIn === true){
        console.log('hola');
      Style = {  
        position: 'absolute',
        top: '40px',
        left: '1px',
        pointerEvents: 'none',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#ffaa3b',
        transition: '.5s all'
      }
  }else {
    console.log('hola');
    Style = {
      position: 'absolute',
        top: '200px',
        left: '1px',
        pointerEvents: 'none',
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#ffaa3b',
        transition: '.5s all'
    }
  }
this.setState ({ CalInicio: data, EstiloCalendarioIn: Style });
}

handleSubmit = (e) =>{
  e.preventDefault();
  const values = 
  JSON.stringify(this.state.viajes)
  console.log(values)
}

  render() {
    const {Estilo, EstiloDes, EstiloCalendario, EstiloCalendarioIn} = this.state
    const {origen, destino, passMen, passMax, CalFin, CalInicio} = this.state.viajes
    return (
      <div className="App">
        <BoxSearch/>
        <br/>
          <div className="box">
          <CampoB 
            name="primer"
            origen = {origen}
            destino = {destino}
            passMen = {passMen}
            passMax = {passMax}
            CalFin = {CalFin}
            CalInicio = {CalInicio}
            Estilo = {Estilo}
            EstiloDes={EstiloDes}
            EstiloCalendario={EstiloCalendario}
            EstiloCalendarioIn={EstiloCalendarioIn}
            handleSubmit={this.handleSubmit}
            hdChangeDestino={this.hdChangeDestino}
            handleChangeSelect={this.handleChangeSelect}
            handleChangeSelect2={this.handleChangeSelect2}
            handleChangeCalendario={this.handleChangeCalendario}
            handleChangeCalendarioIn={this.handleChangeCalendarioIn}
            hdchange ={this.hdchange}
            />
            </div>
      </div>
    );
  }
}

export default App;
