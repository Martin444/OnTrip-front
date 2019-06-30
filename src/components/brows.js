import React, { Component } from 'react'
import Chart from 'react-google-charts';

export default class brows extends Component {
    render() {
        return (
            <div style={{display: 'flex'}}>


            {/* tabla */}
                <table>
                <tr>
                    <th>Viajes</th>
                    <th>Alojamiento</th>
                    <th>Alimentación</th>
                    <th>Eventos</th>
                    <th>Reserva</th>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Lois</td>
                    <td>Griffin</td>
                    <td>$150</td>
                    <td>$100</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Joe</td>
                    <td>Swanson</td>
                    <td>$300</td>
                    <td>$100</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Cleveland</td>
                    <td>Brown</td>
                    <td>$250</td>
                    <td>$100</td>
                    <td>$100</td>
                </tr>
                </table>

            {/* Datos de busqueda */}
                <Chart
                    width={'400px'}
                    height={'200px'}
                    chartType="PieChart"
                    loader={<div>Cargando datos</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Viajes', 16],
                        ['Alojamiento', 2],
                        ['Alimentación', 2],
                        ['Eventos', 2],
                        ['Reserva', 7],
                    ]}
                    options={{
                        title: 'Presupuesto',
                        // Just add this option
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                    />
            </div>
        )
    }
}
