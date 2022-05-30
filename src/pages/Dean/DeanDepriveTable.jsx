import React from 'react'
import{Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import { Container,Row,Col,Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import DeanDepTableTemp from './DeanDepTableTemp'
import AdminService from '../../services/AdminService'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import DeanSideNav from './DeanSideNav'
function DeanDepriveTable({tdata}) {
    
    const navigate =useNavigate();
    
    const saveItem=(e)=>{
        e.preventDefault();
        const item={};
        AdminService.createItem(item).then(response=>{
          navigate('/Dean/Requests');
      }
      )
      .catch(error=>{
         console.log("Something went wrong",error);
      })}



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

    <DeanSideNav></DeanSideNav>
    <h1 style={{textAlign:"center",fontFamily: 'Lalezar',
           fontSize:"4rem",paddingTop:"5%"}}>{prams.id} طلب  جرد    </h1>
   
           <Container style={style}>
     <Row className="justify-content-centre">
       <Col>
           <h3>:التاريخ</h3>
       </Col>
   
       <Col>
       <Row><h3>:رقم الجرد</h3></Row>
       <Row><h3>: سند الجرد</h3></Row>
           
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
         <th class="p-2 col px-2 ">رقم الصنف</th>
         <th class="p-2 col px-2">اسم الصنف</th>
         <th class="p-2 col px-2" >الوحده</th>
         <th class="p-2 col px-2">  الموجود من واقع الجرد</th>
         <th class="p-2 col px-2">  الرصيد الدفتري</th>
         <th class="p-2 col px-2">الكميه المنصرفه</th>
         <th class="p-2 col px-2"> الزياده</th>
         <th class="p-2 col px-2"> حاله الصنف </th>
         <th class="p-2 col px-2">  سعر الوحده</th>
         <th class="p-2 col px-2">  القيمه</th>
         <th class="p-2 col px-2">  العجز</th>
       </tr>
     </thead>
   
     <tbody>
     {tdata.map((item)=>{
   
   return <DeanDepTableTemp Key={item.id} item={item} ></DeanDepTableTemp>
   })}
     </tbody>
    
   </Table>
   
   
   <Button type="submit" style={{
       marginLeft:"10%",fontFamily: 'Lalezar',
           fontSize:"2rem"
   }}  onClick={(e)=>saveItem(e)} >تاكيد</Button>
       </>
  )
}

export default DeanDepriveTable