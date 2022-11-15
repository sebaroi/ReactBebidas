import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/body.css';
import placaVideo from './imagenes/placaVideo.webp';
import ItemCount from '../components/ItemCount';

function body () {
  return (
     
    <Card className='cardProducto' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={placaVideo} />
      <Card.Body>
        <Card.Title>Placa de video</Card.Title>
        <Card.Text>
        Interfaz PCI-Express 3.0.
        Bus de memoria: 192bit.
        Cantidad de núcleos: 1408.
        Frecuencia boost del núcleo de 1830MHz.
        Resolución máxima: 7680x4320.
        </Card.Text>
        <Button className='descripcion' variant="primary">DESCRIPCION</Button> 
        <div>        <ItemCount/></div>
 
      </Card.Body>
    </Card>
  );
}

export default body;