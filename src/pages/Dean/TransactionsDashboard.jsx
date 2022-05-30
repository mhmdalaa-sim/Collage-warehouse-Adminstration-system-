import React from 'react'
import SearchPage from '../../components/SearchPage'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeanSideNav from './DeanSideNav'
import Transaction from '../GeneralWarehouse/Transaction'
function TransactionsDashboard() {
  return (
    <>
       <DeanSideNav></DeanSideNav>
    <h1 style={{textAlign:"center", fontFamily: 'Lalezar',
  fontSize:"4rem",paddingTop:"3%"}}> التحويلات </h1>

<Container> 
      <Row>
      <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
      </Row>
      </Container>


     <Transaction></Transaction>

      
    </>
  )
}

export default TransactionsDashboard