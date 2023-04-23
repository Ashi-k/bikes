import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Bikescard.css'


function Bikescard(bikedata) {
  return (
    <>
    <Link to={`./view-bikes/${bikedata.id}`} style={{textDecoration:'none'}}>
        <Card id='cal' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bikedata.photograph} />
            <Card.Body>
                <Card.Title>{bikedata.name}</Card.Title>
                <Card.Text>
                    <p>
                        <strong>Bike Type</strong> {bikedata.bike_type}
                    </p>

                    <p>
                        <strong>Neighborhood</strong> {bikedata.neighborhood}
                    </p>

                    <p>
                        <strong>Address</strong> {bikedata.address}
                    </p>

                </Card.Text>

            </Card.Body>
        </Card>
    </Link>
</>
  )
}

export default Bikescard