import React from 'react';
import './camSelect-adu.scss';

class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className="pass">
            Pax de 18 años o más
            </label>
            <select className="cell" value={this.state.value} onChange={this.handleChange}>
              
                <option className="op" value="1">1</option>
                <option className="op" value="2">2</option>
                <option className="op" value="3">3</option>
                <option className="op" value="4">4</option>  
            </select>
         
        </form>
      );
    }
  }

  export default FlavorForm;