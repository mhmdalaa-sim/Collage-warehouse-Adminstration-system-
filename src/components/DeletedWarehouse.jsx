import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import{Link} from "react-router-dom"
import AdminService from'../services/AdminService'
import {useNavigate} from "react-router-dom"

function DeletedWarehouse({warehouse}) {

    const style={
        backgroundColor:"#448AE5",
        color:"white",
        borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",
        marginTop:"3%",
        padding:"1%",
        fontFamily: 'Lalezar',
        fontSize:"1.5rem"
    
    }
   const restoreWarehouse=(e)=>{
    e.preventDefault();
    AdminService.restoreWarehouse(warehouse.warehouse_id).then(response=>
        {
          window.location.reload(false);
        }).catch(error=>{
            console.log("something went wrong",error);
        })
    }
  return (
    <>
    <Container style={style}>
      <Row className="justify-content-end">
        <Col sm m lg="auto">
          <h5> مخزن رقم : {warehouse.warehouse_id}</h5>
        </Col>
        
      </Row>
      <Row className="justify-content-end">
      <Col sm m lg="9">
    
        <Button type="submit" onClick={(e)=>restoreWarehouse(e)} style={{float:'left',backgroundColor:"#448AE5",color:'white',fontFamily: 'Lalezar',
    fontSize:"1.5rem", borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",}}>استرجاع المخزن</Button>
        
      
        
        </Col>
        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 >مخزن تابع لقسم  : {warehouse.warehouse_name}</h5>
        </Col>
        <Row className="justify-content-end">
        <Col sm m lg="auto">
          <h5> مكان المخزن : {warehouse.location} </h5>
        </Col>
        </Row>
        <Row className="justify-content-end">
        <Col sm m lg="auto">
          <h5>{warehouse.establishment_time} : التاريخ</h5>
        </Col>
        
      </Row>
      </Row>
      
    
      
    </Container>

  
        </>
  )
}

export default DeletedWarehouse