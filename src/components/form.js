import React, { Component } from 'react'
import moment from 'moment';
import uuid from 'uuid'

// import { TripContext } from '../context'

import RangeCalendario2 from './rangeCalendario2'

import DatePicker from 'react-datepicker';

import {Link} from 'react-router-dom'


export default class form extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            origen: "",
            destino: '',
            passMen: '', passMax: '',
            CalInicio: moment(),
            CalFin: moment()
        }
      }

    // static contextType = TripContext;

    

    handleChange = (event, type) => {

        const value = event.target.value
        
        this.setState({ [type]: value })
    }

    handleChangeCalendarioIn = data => {
        this.setState({ CalInicio: data._d })
    }

    handleChangeCalendario = data => {

        this.setState({ CalFin: data })
    }

    handleSubmit = e => {
        e.preventDefault();
        const trip = {
            id: uuid(),
            origen: this.state.origen,
            destino: this.state.destino,
            passMen: this.state.passMen,
            passMax: this.state.passMax,
            CalInicio: this.state.CalInicio,
            CalFin: this.state.CalFin
        }

        this.props.newTrip(trip)
        this.setState({
            id:uuid(),
            destino:''
        })
    }

    render() {
        const {origen,
            destino,
            passMen,
            passMax,
            CalInicio,
            CalFin} = this.state;
        const { 
            handleChange,
            handleChangeCalendarioIn,
            handleChangeCalendario,
            handleSubmit } = this;

        return (
            <div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        {/* Origen */}
                        <input className="input" list="browsers"
                            onChange={e=>handleChange(e,'origen')}
                            value={origen} />
                        <label className={origen ? "labelOrFocus" : "labelOr"}>ORIGEN</label>
                        {/* Destino */}
                        <input className="input2" list="browsers"
                            onChange={e=>handleChange(e,'destino')}
                            value={destino} />
                        <label className={destino ? "destinoFocus" : "destino"}>DESTINO</label>

                        {/* Pasajeros menores */}
                        <div className="pasajeros-cont">
                            <label className="pass">
                                Pax menores de 18 años
                                </label>
                            <select className="cell" value={passMen} onChange={e=>handleChange(e,'passMen')}>
                                <option className="op" value="1">1</option>
                                <option className="op" value="2">2</option>
                                <option className="op" value="3">3</option>
                                <option className="op" value="4">4</option>
                            </select>
                        </div>


                        {/* Pasajeros mayores */}
                        <div className="pasajeros-cont">
                            <label className="pass">
                                Pax. mayores de 18 años.
                            </label>
                            <select className="cell" value={passMax} onChange={e=>handleChange(e,'passMax')}>
                                <option className="op" value="1">1</option>
                                <option className="op" value="2">2</option>
                                <option className="op" value="3">3</option>
                                <option className="op" value="4">4</option>
                            </select>
                        </div>


                        {/* Calendario Desde */}
                        <div className="calendario-cont">
                            <label>DESDE</label>
                            <DatePicker
                                className="calendar"
                                selected={CalInicio}
                                onChange={handleChangeCalendarioIn}
                                isClearable={false}
                                dateFormat="DD/MM/YYYY"
                                minDate={moment()}
                                maxDate={moment().add(5, "months")}
                                showDisabledMonthNavigation
                            />
                        </div>


                        {/* Calendario Hasta */}
                        <div className="calendario-cont">
                            <RangeCalendario2
                                CalInicio={CalInicio}
                                CalFin={CalFin}
                                handleChangeCalendario={handleChangeCalendario}
                            />
                        </div>
                        <Link to="/results">
                             <button type="button" className="btn-primary">Buscar</button>
                        </Link>
                       
                        <button type="submit" className="btn-secundary">Agregar</button>
                    </form>
                </div>
            </div>


        )
    }
}
