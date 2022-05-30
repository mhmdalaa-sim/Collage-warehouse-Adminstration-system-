import React, { useState } from 'react'
import { Form,Container,Row,Col,Button } from 'react-bootstrap'
import{Link} from "react-router-dom"
import AdminService from'../services/AdminService'

function WareHouse({warehouse}) {
  
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
    const deleteWarehouse=(e)=>{
      e.preventDefault();
      AdminService.removeWarehouse(warehouse.warehouse_id).then(response=>
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
    
      <Button type="submit" onClick={(e)=>deleteWarehouse(e)} style={{float:'left',color:'white', borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",backgroundColor:"red"
        }}> مسح</Button>
      <Link to={`/WareHouses/${warehouse.warehouse_id}`}><Button type="submit" style={{float:'left',color:'white', borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",backgroundColor:"red"
        }}>اظهار التفاصيل</Button></Link>
        
        </Col>
        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 > مخزن تابع لقسم  : {warehouse.warehouse_name} </h5>
        </Col>

        <Row className="justify-content-end">

        <Col sm m lg="auto">
          <h5> مكان المخزن : {warehouse.location} </h5>
        </Col>

        
       
        </Row>
        








       
        <Row className="justify-content-end">
        <Col sm m lg="auto">
          <h5>{warehouse.establishment_time} :التاريخ</h5>
        </Col>
        
      </Row>

     
    
      </Row>
    </Container>

  
        </>
  )
}

export default WareHouse