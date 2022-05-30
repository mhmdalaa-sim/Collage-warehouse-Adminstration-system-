import React from 'react'
import {Link, useParams} from "react-router-dom"

import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import logo3 from "../Assets/Path 666.svg"
import logo4 from "../Assets/accept.svg"
function Gitem() {

const prams = useParams()

  const rowstyle={

    marginTop:"5%"
  }

  const textstyle={

    fontFamily: 'Lalezar',
    fontSize:"2rem"
  }
  return (
    <>
 
    <Container fluid="md">
    <Row style={rowstyle}>
      <Col fluid>
      <img src={logo3} style={{width:"30%"}} />
      </Col>
      <Col style={{textAlign:'center'}}>
      <Row fluid>
      <Col> <Form.Label ><h3 style={textstyle}>الوحده</h3></Form.Label>
      <h4 style={textstyle}>                </h4>
      </Col>
   
      <Col> <Form.Label ><h3 style={textstyle}>اسم الصنف</h3></Form.Label>
      <h4 style={textstyle}>{prams.name}</h4>
  
      </Col>
  
      <Col> <Form.Label ><h3 style={textstyle}>الحاله</h3></Form.Label>
      <h4 style={textstyle}></h4>
      </Col>
  
      <Col> <Form.Label ><h3 style={textstyle}>السعر</h3></Form.Label>
      <h4 style={textstyle}></h4>
  
      </Col>
     
      </Row>
      
    </Col>
    </Row>
    <Row style={rowstyle}>
  
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label><h3 style={textstyle}>الوصف</h3></Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    </Row>
  
    <Row style={rowstyle}>
    
    <Col><button type='submit' style={{backgroundColor:"white",marginTop:"6%",borderColor:"white",borderStyle:"none" }}><img src={logo4} style={{width:"100%",backgroundColor:"white",marginTop:"5%",}} /></button> 
  </Col>
  
  <Col> 
  <Row>
  <Col style={{float:"right"}}>
  
  <Form.Label ><h3 style={textstyle}>تاريخ الصلاحيه</h3></Form.Label>
      <h4 style={textstyle}></h4>
  </Col>
  <Col style={{paddingLeft:"42%"}} > 
  <Form.Label ><h3 style={textstyle}>تاريخ الادخال</h3></Form.Label>
      <h4 style={textstyle}></h4>
  </Col>
  </Row>
  
  </Col>
  
    
    </Row>
  </Container>
  
      
    </>
  )
}

export default Gitem