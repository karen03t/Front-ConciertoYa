// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
    <header className="header">
        <div className="logo-container">
            <img src="/imagenes/LogoConciertoYA.png" alt="Logo de ConciertoYa" className='logo' />
        </div>
        <nav className='nav-links'>
        <Link to="/">Inicio</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/admin">Admin</Link>
        </nav>
    </header>
    );
};

export default Header;
