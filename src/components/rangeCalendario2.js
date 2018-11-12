import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './rangeCalendario.scss';

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
            top: '170px',
            left: '1px',
            pointerEvents: 'none',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#ffaa3b',
            transition: '.5s all'
          }
      }else {
        Style = {
          position: 'absolute',
            top: '180px',
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
              />
              <label style= {this.state.Estilo}>HASTA</label>
            </div>
           );
        }
      
    
  }
  
  export default calendar;