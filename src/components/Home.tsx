import React, { useState } from 'react';
import './Home.css'; // Importa el archivo de estilos CSS
import Instrumento from './instrumento';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Número total de imágenes de instrumentos

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <div className="home-container">
      <h1 style={{ fontSize: '66px', color: 'blue', textAlign: 'center' }}>Musical Hendrix</h1>

      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <div className="slide">
            <img src="https://excursionesnuevayork.net/wp-content/uploads/2019/03/Tour-por-Nueva-York.png" alt="Instrumento 1" />
          </div>
          <div className="slide">
            <img src="https://gestion.pe/resizer/onZRxv2tWnpq-JPhX9KTgaueAjI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CYGBYAO7RVFB5IUSDB54WVH3FE.jpg" alt="Instrumento 2" />
          </div>
          <div className="slide">
            <img src="https://photo620x400.mnstatic.com/9b58cb8634741177f48a5fddfa900786/tienda-de-instrumentos-musicales-hong-tich.jpg" alt="Instrumento 3" />
          </div>
        </div>
        <button className="prev" onClick={prevSlide}>Prev</button>
        <button className="next" onClick={nextSlide}>Next</button>
      </div>
      <div className="descripcion-tienda">
        <p style={{ fontSize: '26px', textAlign: 'center' }}>Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de
          experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las
          mejores elecciones para tu compra musical.
      </p>
      </div>
      
      {/* Llama al componente Instrumento */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
  <div style={{ margin: '10px', width: '450px' }}>
    <Instrumento />
  </div>
</div>

      
    </div>
  );
};

export default Home;
