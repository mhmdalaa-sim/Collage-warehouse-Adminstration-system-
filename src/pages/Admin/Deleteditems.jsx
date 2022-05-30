import React from 'react'
import DeletedItem from '../../components/DeletedItem'
import AdminSideNav from './AdminSideNav';
import{Link} from "react-router-dom"
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import AdminService from '../../services/AdminService';

const Deleteditems = () => {
  const [items,setItems]= useState([])

  useEffect(()=>{
    AdminService.getDeletedItems().then(response =>{
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
    fontSize:"4rem"}}>الاصناف المحذوفة</h1>
        <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>

        {items.length>0?items.map((item)=>{
            return <DeletedItem key={item.item_id} item={item}></DeletedItem>
        }):<h1 style={{textAlign:"center" ,marginTop:"3%", fontFamily: 'Lalezar',
        fontSize:"4rem"}}>لا توجد اصناف تمت ازالتها</h1>}

    </>
  )
      }

export default Deleteditems