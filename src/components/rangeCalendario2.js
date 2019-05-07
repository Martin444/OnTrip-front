import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './rangeCalendario.scss';

class calendar extends React.Component {
        render() {
          const { CalFin, EstiloCalendario, handleChangeCalendario } = this.props
          return (
            <div className="calendar-contenedor">
              <DatePicker
              className="calendar"
              selected = {CalFin}
              onChange = {handleChangeCalendario}
              isClearable = {true}
              dateFormat = "DD/MM/YYYY"
              name = {this.props.name}
              minDate={moment()}
                maxDate={moment().add(5, "months")}
                showDisabledMonthNavigation
              />
              <label style= {EstiloCalendario}>HASTA</label>
            </div>
           );
        }
      
    
  }
  
  export default calendar;