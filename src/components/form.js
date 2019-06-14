import React, { Component } from 'react'
import {TripContext} from '../context'

import RangeCalendario2 from './rangeCalendario2'
import List from './list'

import DatePicker from 'react-datepicker';
import moment from 'moment';


export default class form extends Component {

    static contextType = TripContext;

    render() {
        const {origen,
            destino,
            passMen,
            passMax,
            CalInicio,
            CalFin, 
            newTrip,
            handleChange,
            handleChangeDestino, 
            handleChangeSelect, 
            handleChangeSelect2,
            handleChangeCalendarioIn,
            handleChangeCalendario,
            handleSubmit} = this.context

        return (
        <div>
             <div className="form-container">
               <form onSubmit={handleSubmit}>
                   {/* Origen */}
                    <input className="input" list="browsers"
                    onChange={handleChange} 
                    value={origen}/>
                        <label className={origen ? "labelOrFocus" : "labelOr"}>ORIGEN</label>
                    {/* Destino */}
                        <input className="input2" list="browsers"
                     onChange={handleChangeDestino}
                    value={destino}/>
                        <label className={destino ? "destinoFocus" : "destino"}>DESTINO</label>
                         
                          {/* Pasajeros menores */}
                        <div className="pasajeros-cont">
                            <label className="pass">
                                Pax de 18 años o más
                                </label>
                                <select className="cell" value={passMen} onChange={handleChangeSelect}>
                                    <option className="op" value="1">1</option>
                                    <option className="op" value="2">2</option>
                                    <option className="op" value="3">3</option>
                                    <option className="op" value="4">4</option>
                                </select>
                        </div>
                          

                        {/* Pasajeros mayores */}
                    <div className="pasajeros-cont">
                        <label className="pass">
                            Pax. menores de 18 años.
                            </label>
                            <select className="cell" value={passMax} onChange={handleChangeSelect2}>
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
                            selected = {CalInicio}
                            onChange = {handleChangeCalendarioIn}
                            isClearable = {false}
                            dateFormat = "DD/MM/YYYY"
                            minDate={moment()}
                            maxDate={moment().add(5, "months")}
                            showDisabledMonthNavigation
                            />
                        </div>
                        
                        
                        {/* Calendario Hasta */}
                        <div className="calendario-cont">
                            <RangeCalendario2
                            CalInicio = {CalInicio}
                            CalFin = {CalFin}
                            handleChangeCalendario = {handleChangeCalendario}
                            />
                        </div>
                            
                 <button type="submit" className="btn-primary">Buscar</button>
                 <button type="button" className="btn-secundary">Agregar</button>
                </form>
            </div>
            <List newTrip = {newTrip}/>
        </div>

           
        )
    }
}
