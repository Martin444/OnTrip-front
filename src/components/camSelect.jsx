import React from 'react';
import './camSelect-adu.scss';

class FlavorForm extends React.Component {
  
    render() {
      const {passMax, handleChangeSelect} = this.props
      return (
        <form onSubmit={this.handleSubmit}>
          <label className="pass">
            Pax de 18 años o más
            </label>
            <select className="cell" value={passMax} onChange={handleChangeSelect}>
              
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
