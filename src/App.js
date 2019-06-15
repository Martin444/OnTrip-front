import React, { Component } from 'react';
import List from './components/list'
import Form from './components/form'
import Brows from './components/brows'
import './App.css';

import moment from 'moment';
import uuid from 'uuid'


class App extends Component {

  state = {
    id:uuid(),
    origen :"",
    destino: '',
    passMen: '', passMax: '',
    CalInicio: moment(),
    CalFin: moment(),
    trips: []
}
handleChange = event =>{
  const value = event.target.value

  this.setState({origen:value})
}

handleChangeDestino = event =>{
  const value = event.target.value

  this.setState({destino:value})
}

handleChangeSelect = event =>{
  const value = event.target.value

  this.setState({passMen:value})
}

handleChangeSelect2 = event =>{
  const value = event.target.value

  this.setState({passMax:value})
}
handleChangeSelect2 = event =>{
  const value = event.target.value

  this.setState({passMax:value})
}

handleChangeCalendarioIn = data =>{

  this.setState({CalInicio:data})
}

handleChangeCalendario = data =>{

  this.setState({CalFin:data})
}

handleSubmit = e => {
  e.preventDefault();
  const newTrip = {
      id:this.state.id,
      origen:this.state.origen,
      destino: this.state.destino,
      passMen: this.state.passMen,
      passMax: this.state.passMax,
      CalInicio: this.state.CalInicio,
      CalFin: this.state.CalFin
  }

  const UpdateTrip = {...this.state.trips, newTrip}

  this.setState({
      trips: UpdateTrip,
      origen:'',
      destino: '', 
      passMen: '', 
      passMax: '', 
      CalInicio: moment(), 
      CalFin: moment(),
      
  },)
}

  render() {
    return (
      <div className="App">
        {/* <BoxSearch/> */}
        <br/>
          <div className="box">
          <Form
          origen={this.state.origen}
          destino={this.state.destino}
          passMen={this.state.passMen}
          passMax={this.state.passMax}
          CalInicio={this.state.CalInicio}
          CalFin={this.state.CalFin}
          handleChange={this.handleChange}
          handleChangeCalendario={this.handleChangeCalendario}
          handleChangeCalendarioIn={this.handleChangeCalendarioIn}
          handleChangeDestino={this.handleChangeDestino}
          handleChangeSelect={this.handleChangeSelect}
          handleChangeSelect2={this.handleChangeSelect2}
          handleSubmit={this.handleSubmit}
          />
          </div>
          <div className="box">
          <List
          trips={this.state.trips}
          />
          <Brows/>
          </div>
      </div>
    );
  }
}

export default App;
