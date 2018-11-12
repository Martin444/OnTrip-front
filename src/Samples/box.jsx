import React from 'react'
import Table from './table'

export default class contenedor extends React.Component {
    render(){
        return (
            <div>
                <form className="caja">
                   <Table/>
                </form>
            </div>
        );

    }
}