import {React , useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { Row } from 'react-bootstrap' 
import Col from 'react-bootstrap/Col'
import { ListGroup } from 'react-bootstrap'
import OperatingHours from './OperatingHours'
import Review from './review'
import './Bikescard.css';



function Bikesview(bikes) {
const params = useParams()

useEffect(()=>{

},[])


  return (
    <div> <>
    {bikes ? (
      <Row>

        <Col id='cal' lg={6} md={6} className="ps-2 pt-5 pb-5 ms-5  text-center">
          <img src={bikes.photograph} alt="Bikes" className="img-fluid rounded" style={{ height: '600px' }} />
        </Col>

        <Col id='cal' className="me-5 mt-5 pt-5 ">
          <ListGroup>
            <ListGroup.Item className="bg-primary text-white"><strong>Name :- </strong>{bikes.name}</ListGroup.Item>
            <ListGroup.Item className="bg-primary text-white"><strong>Bike Type :- </strong>{bikes.bike_type}</ListGroup.Item>
            <ListGroup.Item className="bg-primary text-white"><strong>Price :- </strong>{bikes.price}</ListGroup.Item>
            <ListGroup.Item className="bg-primary text-white"><strong>Millege :- </strong>{bikes.millege}</ListGroup.Item>

            <ListGroup.Item>

              <div className='mt-4'>
                <OperatingHours timeData={bikes.operating_hours} /> 
              </div>

              <div className='mt-3'>
              <Review reviewData={bikes.reviews}/>
              </div>

              

            </ListGroup.Item>

          </ListGroup>
        </Col>


      </Row>) : ""
    }
  </></div>
  )
}

export default Bikesview