import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Header from './Header'; 
import Footer from './Footer';
import StripeCheckoutButton from './StripeCheckoutButton'; // Importar el nuevo componente

const Home = () => {
  const [artistas, setArtistas] = useState([]);
  const [lugares, setLugares] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [compras, setCompras] = useState(0);

  useEffect(() => {
    // Simulación de datos
    setArtistas([
      { id: 1, nombre: 'Artista 1', genero_musical: 'Rock', redes_sociales: 'https://facebook.com/artista1' },
      { id: 2, nombre: 'Artista 2', genero_musical: 'Pop', redes_sociales: 'https://instagram.com/artista2' },
    ]);

    setLugares([
      { id: 1, nombre: 'Lugar 1', direccion: 'Calle 123', capacidad: 5000, ciudad: 'Ciudad 1', imagen: '/imagenes/lugar1.jpg' },
      { id: 2, nombre: 'Lugar 2', direccion: 'Avenida 456', capacidad: 3000, ciudad: 'Ciudad 2', imagen: '/imagenes/lugar2.jpg' },
    ]);

    setEventos([
      { id: 1, nombre: 'Concierto de Artista 1', fecha: '2024-05-20', hora: '20:00', descripcion: 'Un gran concierto de rock.', genero_musical: 'Rock', estado: 'programado', lugar_id: 1 },
      { id: 2, nombre: 'Concierto de Artista 2', fecha: '2024-06-15', hora: '19:00', descripcion: 'Un concierto pop inolvidable.', genero_musical: 'Pop', estado: 'programado', lugar_id: 2 },
    ]);
  }, []);

  return (
    <div className="home">
      <Header />

      <section className ="section artistas">
        <h2>Artistas Destacados</h2>
        <div className="grid">
          {artistas.map(artista => (
            <div key={artista.id} className="card">
              <h3>{artista.nombre}</h3>
              <p>Género: {artista.genero_musical}</p>
              <a href={artista.redes_sociales} target="_blank" rel="noopener noreferrer" className="social-link">Redes Sociales</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section eventos">
        <h2>Eventos Programados</h2>
        <div className="grid">
          {eventos.map(evento => (
            <div key={evento.id} className="card">
              <h3>{evento.nombre}</h3>
              <p>Fecha: {evento.fecha} - Hora: {evento.hora}</p>
              <p>{evento.descripcion}</p>
              <StripeCheckoutButton evento={evento} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;