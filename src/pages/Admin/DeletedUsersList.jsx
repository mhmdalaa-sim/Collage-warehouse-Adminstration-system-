import React from 'react'
import {useEffect,useState} from "react"
import AdminSideNav from './AdminSideNav'
import { Container,Row,Col,Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import SearchPage from '../../components/SearchPage'
import AdminService from'../../services/AdminService'

const DeletedUsersList= () => {
  const [roles,setRoles]= useState([])

  useEffect(()=>{
    AdminService.getDeletedUsers().then(response =>{
      setRoles(response.data);

   })
   .catch(error =>{

      console.log('something went wrong',error);

  })
  },[])
  
  const style={
    backgroundColor:"#448AE5",
    color:"white",
    borderRadius: "10px",
    borderStyle:"solid",
    borderColor: "#15509D",
    marginTop:"3%",
    padding:"1%",
    fontFamily: 'Lalezar',
fontSize:"2rem",
}
  return (
   <>
  <AdminSideNav></AdminSideNav>
   <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"5%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>
       {roles.length>0?roles.map((role)=>{
           return <>
           <Container style={style}>
     
      <Row className="justify-content-end">
      <Col >
    
      <Button type="submit"
       onClick={(e)=>{ e.preventDefault();
                 AdminService.restoreUser(role.user.user_id).then(response=>{
                   window.location.reload(false);
                  }).catch(error=>{
                    console.log("something went wrong",error);
                  })}
         } style={{float:'left',color:'white', borderRadius: "10px",
         borderStyle:"solid",
         borderColor: "#15509D"
        }}>استرجاع </Button>
        
      
        </Col>

        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 >تاريخ الانضمام : {role.date_of_assign}</h5>
        </Col>
        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 > المرتب : {role.salary}</h5>
        </Col>

        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 >القسم  : {role.warehouse.warehouse_name}</h5>
        </Col>

        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 > الدور : {role.role}</h5>
        </Col>

        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 > اسم المستخدم : {role.user.username} </h5>
        </Col>

        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 >- {role.id}</h5>
        </Col>
      </Row>
    </Container>

           </>
           
          }):<h1 style={{textAlign:"center" ,marginTop:"3%", fontFamily: 'Lalezar',
          fontSize:"4rem"}}>لا يوجد مستخدمين تمت ازالتهم</h1>}
   </>
  )
}

export default DeletedUsersList