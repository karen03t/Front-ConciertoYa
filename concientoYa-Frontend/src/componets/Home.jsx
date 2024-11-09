// src/components/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <main className="home">
        <section className="hero">
            <h1>Bienvenidos a CONCIERTOYA</h1>
            <p>Tu lugar para encontrar entradas para los mejores conciertos</p>
            <button>Ver Próximos Eventos</button>
        </section>
        <section className="featured-events">
            <h2>Eventos Destacados</h2>
            {/* Aquí podrías mapear una lista de eventos destacados */}
            <div className="events-list">
            <div className="event-card">Evento 1</div>
            <div className="event-card">Evento 2</div>
            <div className="event-card">Evento 3</div>
            </div>
        </section>
        </main>
    );
};

export default Home;
