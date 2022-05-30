import React from 'react'
import DeletedWarehouse from '../../components/DeletedWarehouse'
import AdminSideNav from './AdminSideNav'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import { useEffect, useState } from "react";
import AdminService from'../../services/AdminService'


const DeletedWareHouses = () => {
  const [warehouses,setWarehouses]= useState([])
  useEffect(()=>{
    AdminService.getDeletedWarehouses().then(response =>{
    setWarehouses(response.data);
   })
   .catch(error =>{

      console.log('something went wrong',error);

  })
  },[])
  return (<>
       <AdminSideNav></AdminSideNav>

       <h1 style={{textAlign:"center",marginTop:"5%",   fontFamily: 'Lalezar',
    fontSize:"4rem"}}>المخازن المحذوفة</h1>

       <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>

       {warehouses.length>0?warehouses.map((warehouse)=>{
        return <DeletedWarehouse key={warehouse.warehouse_id} warehouse={warehouse}></DeletedWarehouse>
       }):<h1  style={{textAlign:"center" ,marginTop:"3%", fontFamily: 'Lalezar',
       fontSize:"4rem"}}>لا توجد مخازن تمت ازالتها</h1>} 
  </>
  
  )
}

export default DeletedWareHouses