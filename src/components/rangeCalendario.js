import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './rangeCalendario.scss';
// import moment = require('moment');

class calendar extends React.Component {
      render() {
        const { CalInicio, EstiloCalendarioIn, handleChangeCalendarioIn } = this.props
        return (
          <div className="calendar-contenedor">
            <DatePicker
            className="calendar"
            selected = {CalInicio}
            onChange = {handleChangeCalendarioIn}
            isClearable = {true}
            dateFormat = "DD/MM/YYYY"
            name = {this.props.name}
            minDate={moment()}
            maxDate={moment().add(5, "months")}
            showDisabledMonthNavigation
            />
            <label style= {EstiloCalendarioIn}>DESDE</label>
          </div>
         );
      }
    
  
}

export default calendar;