import  { React,useEffect } from 'react'
import Bikescard from './Bikescard'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import bikeLists from './actions/bikeAction'
import { useDispatch, useSelector } from 'react-redux'



function Bikes() {

const dispatch= useDispatch()

useEffect(() => {
  dispatch(bikeLists())
}, [])

const {bikeList}=useSelector(state=>state.bikesReducer)

console.log(bikeList);


  return (
 <>
   
           <Row>
              {
                  bikeList.map(item => (
                      <Col className='p-5' lg={4} md={6} >
                          <Bikescard restdata={item}></Bikescard>
                      </Col>
                  ))
              }
          </Row>
     
 </>
  )
}

export default Bikes