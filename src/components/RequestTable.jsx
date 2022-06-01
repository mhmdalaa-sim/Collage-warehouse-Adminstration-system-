import React from 'react'
import{Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import { Container,Row,Col,Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import ReqTableTemp from './ReqTableTemp'
import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import GeneralSideNav from '../pages/GeneralWarehouse/GeneralSideNav'
function RequestTable({tdata}) {

    const prams = useParams()

    const tablestyle={

        float:"centre",
        width:"80%",
        margin:"5%",
        fontFamily: 'Lalezar',
    fontSize:"3rem"

    }

    const style={
        
        color:"black",
        borderRadius: "10px",
        marginTop:"5%",
        padding:"1%",
        
        fontFamily: 'Lalezar',
        fontSize:"3rem"
    }
  return (

    <>
    <GeneralSideNav></GeneralSideNav>
 <h1 style={{textAlign:"center",fontFamily: 'Lalezar',
        fontSize:"4rem",paddingTop:"5%"}}>{prams.id} طلب ازن وصرف    </h1>

        <Container style={style}>
  <Row className="justify-content-centre">
    <Col>
        <h3>:التاريخ</h3>
    </Col>

    <Col>
    <Row><h3>:رقم الازن</h3></Row>
    <Row><h3>: سند الصرف</h3></Row>
        
    </Col>

    <Col>
    <Row><h3>  : مخزن</h3></Row>
    <Row><h3>  : تاريخ الطلب</h3></Row>
    <Row><h3>:اسم الطلب (المخزن/الإدارة/العامل)</h3></Row>
        
    </Col>


  </Row>
  

</Container>


<Table striped bordered hover size="lg" style={tablestyle} >
  <thead>
    <tr class=" d-flex flex-row-reverse  ">
      <th class="p-2 col px-2"> الكميه المطلوبه</th>
      <th class="p-2 col px-2">الكميه المصرح بها</th>
      <th class="p-2 col px-2">اسم الصنف</th>
      <th class="p-2 col px-2">  الملاحظات</th>
      
    </tr>
  </thead>

  <tbody>
  
  </tbody>
 
</Table>


<Button type="submit" style={{
    marginLeft:"10%",fontFamily: 'Lalezar',
        fontSize:"2rem"
}}>تاكيد</Button>
    </>
  )
}

export default RequestTable