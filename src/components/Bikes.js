import React, { useEffect } from 'react'
import Bikescard from './Bikescard'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { bikeList } from './actions/bikeAction'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'



function Bikes() {

const dispatch=useDispatch()

useEffect(() => {
  dispatch(bikeList())
}, [])

const {bikeList}=useSelector(state=>state.bikesReducer)



  return (
 
         <Row>
            {
                bikeList.map(item => (
                    <Col className='p-5' lg={4} md={6} >
                        <Bikescard restdata={item}></Bikescard>
                    </Col>
                ))
            }
        </Row>
   
  )
}

export default Bikes