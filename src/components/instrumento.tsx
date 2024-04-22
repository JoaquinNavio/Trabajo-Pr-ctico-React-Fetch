import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '/Users/joaco/OneDrive/Escritorio/tpreactlab/src/intrumentos.css';

const Instrumento = () => {
  const [instrumentos, setInstrumentos] = useState([]);
  const navigate = useNavigate(); // Define useNavigate aquí

  useEffect(() => {
    fetch("http://localhost:8080/instrumentos/")
      .then((response) => response.json()) 
      .then((instrumento) => setInstrumentos(instrumento));
  }, []);

  // Mueve la definición de handleClick dentro del cuerpo del componente funcional
  const handleClick = (instrumento) => {
    const detalleUrl = `/detalle/${instrumento.id}`;
    navigate(detalleUrl);
  };

  return (
<div className="instrumentos-container" style={{ maxHeight: '4000px', overflowY: 'auto' }}>
      {instrumentos.map(instrumento => (
        <div key={instrumento.id} className="item-venta">
    <img src={"/img/" + instrumento.imagen} alt={instrumento.instrumento} style={{ width: '400px' }} />
          <div className="detalles-instrumento">
            <h2 style={{ fontSize: '30px' }}>{instrumento.instrumento}</h2>

            <p style={{ fontSize: '28px' }}>{instrumento.precio}$</p>
            
            {instrumento.costo_envio == "G" ? (
              <p style={{ color: 'green', fontSize: '26px' }}>Envío Gratis</p>
            ) : (
              <p style={{ color: 'orange', fontSize: '26px' }}>
                El costo de envio es de: {instrumento.costo_envio}
              </p>
            )}

            <p style={{ fontSize: '25px' }}>{instrumento.cantidad_vendida} vendidos</p>
            
            <button onClick={() => handleClick(instrumento)}>Ir a Detalle</button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Instrumento;
