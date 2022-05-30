import React from 'react'
import ItemRow from '../../components/ItemRow'
import AdminSideNav from './AdminSideNav'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import AdminService from '../../services/AdminService';
import { useEffect, useState } from "react";

const LIstOfItems = () => {
  const [items,setItems]= useState([])

  useEffect(()=>{
    AdminService.getAllItems().then(response =>{
      setItems(response.data);
   })
   .catch(error =>{

      console.log('something went wrong',error);

  })
  },[])  
  return (
    <>
       <AdminSideNav></AdminSideNav>

        <h1 style={{textAlign:"center" ,marginTop:"3%", fontFamily: 'Lalezar',
    fontSize:"4rem"}}>الاصناف الموجوده</h1>
        <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>

       
        
        {items.length>0?items.map((item)=>{
            return <ItemRow key={item.item_id} item={item}></ItemRow>
        }):<h1 style={{textAlign:"center" ,marginTop:"3%", fontFamily: 'Lalezar',
        fontSize:"4rem"}}>لا توجد اصناف متاحة</h1>}

        <div><Link to="/Admin/NewItem"><Button style={{marginTop:"5%",marginLeft:"10%",   fontFamily: 'Lalezar',
    fontSize:"1.5rem", borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D"}}>اضافه صنف جديد</Button></Link></div>
    </>
  )
}

export default LIstOfItems