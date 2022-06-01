import React from 'react'
import GeneralSideNav from '../pages/GeneralWarehouse/GeneralSideNav'
import{Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import { Container,Row,Col,Button,Form,FormControl } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import RefundAddDeleteTableRows from './RefundAddDeleteTableRows'
function NewRefundTable() {


  return (

   
    <>
     <GeneralSideNav></GeneralSideNav>
    
    <h1 style={{textAlign:"center",fontFamily: 'Lalezar',
    fontSize:"4rem",paddingTop:"5%"}}>    طلب ارتجاع جديد </h1>
    

    <Form>
        <Container style={{ fontFamily: 'Lalezar',
        fontSize:"1rem",marginTop:"5%"}}>
  <Row className="justify-content-centre">
  <Col style={{marginRight:"2%"}}>
  <Row>  <Form.Label ><h3>تاريخ الطلب</h3></Form.Label> <Form.Control type="date" placeholder="" /></Row>
    <Row style={{marginTop:"3%", }}><Form.Label ><h3>   المخزن</h3></Form.Label> <Form.Control type="text" placeholder="" /></Row>
    </Col>

    <Col style={{marginRight:"2%"}}>
    <Row ><Form.Label ><h3>اسم صاحب العهده </h3></Form.Label> <Form.Control type="text" placeholder="" /></Row>
    <Row style={{marginTop:"3%"}}><Form.Label ><h3>اسم الجهة </h3></Form.Label> <Form.Control type="text" placeholder="" /></Row>
        
    </Col>
 
  </Row>
  

</Container>

</Form>


<RefundAddDeleteTableRows></RefundAddDeleteTableRows>

<Button type="submit" style={{
    marginLeft:"10%",fontFamily: 'Lalezar',
        fontSize:"2rem" ,marginTop:"1%",borderRadius: "10px",
}}>تاكيد </Button>




    </>
  )
}

export default NewRefundTable