import React from 'react';
import './camSelect-adu.scss';

class FlavorForm extends React.Component {
  
  
    render() {
      const {passMen, handleChangeSelect2} = this.props
      return (
        <form onSubmit={this.handleSubmit}>
          <label className="pass">
            Pax. menores de 18 años.
            </label>
            <select className="cell" value={passMen} onChange={handleChangeSelect2}>
              
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