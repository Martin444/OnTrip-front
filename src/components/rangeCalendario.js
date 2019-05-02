import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './rangeCalendario.scss';
// import moment = require('moment');

class calendar extends React.Component {
  constructor(...props){
    super(...props); 
      this.state ={StartDate: moment(), Estilo:{}};

      this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange(data) {
    

    let Style;

    if (this.handleChange === true){
          console.log('hola');
        Style = {  
          position: 'absolute',
          top: '109px',
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
          top: '112px',
          left: '1px',
          pointerEvents: 'none',
          fontSize: '15px',
          fontWeight: 'bold',
          color: '#ffaa3b',
          transition: '.5s all'
      }
    }
this.setState ({ StartDate: data, Estilo: Style });
  }

      render() {
        return (
          <div className="calendar-contenedor">
            <DatePicker
            className="calendar"
            selected = {this.state.StartDate}
            onChange = {this.handleChange}
            isClearable = {true}
            dateFormat = "DD/MM/YYYY"
            name = {this.state.name}
            minDate={moment()}
            maxDate={moment().add(5, "months")}
            showDisabledMonthNavigation
            />
            <label style= {this.state.Estilo}>DESDE</label>
          </div>
         );
      }
    
  
}

export default calendar;