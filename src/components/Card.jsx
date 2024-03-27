// Tarjetas
import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const CardContent = ({ nombre, fecha, tipo, inalienable, extra }) => {
  return (
    <Col>
      <Card className='bg-light'>
        <Card.Body>
          <Card.Title><h3><b>{nombre}</b></h3></Card.Title>
          <Card.Text>
            <p><b>Fecha:</b> {fecha}</p>
            <p><b>Tipo:</b> {tipo}</p>
            <p><b>Inalienable:</b> {inalienable ? 'Sí' : 'No'}</p>
            <p><b>Información adicional:</b> {extra}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardContent
