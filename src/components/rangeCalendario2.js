import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './rangeCalendario.scss';

class calendar extends React.Component {
        render() {
          const { CalFin, handleChangeCalendario, CalInicio } = this.props
          return (
            <div className="calendar-contenedor">
              <label >HASTA</label>
              <DatePicker
              className="calendar"
              selected = {CalFin}
              onChange = {handleChangeCalendario}
              isClearable = {false}
              dateFormat = "DD/MM/YYYY"
              name = {this.props.name}
              minDate={CalInicio}
                maxDate={moment().add(5, "months")}
                showDisabledMonthNavigation
              />
            </div>
           );
        }
      
    
  }
  
  export default calendar;