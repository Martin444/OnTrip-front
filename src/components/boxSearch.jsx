import React from 'react';
import  './boxSearch.scss';


const contenido = () => (

    <div className="container center">
    <nav className="menu">
        <h1 className="menu__logo">OnTrip</h1>

        <div className="menu__right">
            <ul className="menu__list">
                <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Inicio</a></li>
                <li className="menu__list-item"><a className="menu__link" href="#">Mi perfil</a></li>
                <li className="menu__list-item"><a className="menu__link" href="#">Mi reserva</a></li>
                <li className="menu__list-item"><a className="menu__link" href="#">Ayuda</a></li>
            </ul>

            <button className="menu__search-button"></button>

            <form className="menu__search-form hide" method="POST">
                <input className="menu__search-input" placeholder="Busqueda relacionada" />
            </form>
        </div>
    </nav>
</div>


);


export default contenido;
