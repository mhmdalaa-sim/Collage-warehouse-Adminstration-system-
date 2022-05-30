import React from 'react'
import {Link, useParams} from "react-router-dom"
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'

import logo3 from "../pages/Assets/Path 666.svg"
import logo4 from "../pages/Assets/accept.svg"
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import AdminService from '../services/AdminService'
import AdminSideNav from '../pages/Admin/AdminSideNav'


const NewItem=()=> {

  

  const[item_name,setName]=useState('');
  const[category,setCategory]=useState('');
  const[unit,setUnit]=useState('');
  const[description,setDescription]=useState('');
  const[_available,setAvailable]=useState(true);
  const navigate =useNavigate();
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const rowstyle={

    marginTop:"5%"
  }
  const saveItem=(e)=>{
    e.preventDefault();
    const item={item_name,category,unit,description,_available};
    AdminService.createItem(item).then(response=>{
      navigate('/itemslist');
  }
  )
  .catch(error=>{
     console.log("Something went wrong",error);
  })}

  
  return (

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Container fluid="md">
    <Row style={rowstyle}>
      <Col fluid>
      <img src={logo3} style={{width:"30%"}} />
      </Col>
      <Col style={{textAlign:'center'}}>
      <Row fluid>
      <Col> <Form.Label ><h3>الوحده</h3></Form.Label>
      <Form.Control type="text" placeholder="" onChange={(e)=>setUnit(e.target.value)} required/>
      </Col>
   
      <Col> <Form.Label ><h3>اسم الصنف</h3></Form.Label>
      <Form.Control type="text" placeholder="" onChange={(e)=>setName(e.target.value)} required/>
  
      </Col>
  
    
  
      <Col> <Form.Label ><h3>الفئة</h3></Form.Label>
      <Form.Control type="text" placeholder="" onChange={(e)=>setCategory(e.target.value)} required />
  
      </Col>
     
      </Row>
      
    </Col>
    </Row>
    <Row style={rowstyle}>
  
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label><h3>الوصف</h3></Form.Label>
      <Form.Control as="textarea" rows={3} onChange={(e)=>setDescription(e.target.value)} required/>
    </Form.Group>
    </Row>
  
    <Row style={rowstyle}>
    
    <Col><Button type='submit'  onClick={(e)=>saveItem(e)} style={{backgroundColor:"blue",marginTop:"6%",borderColor:"white",borderStyle:"none" }}>اضافه</Button> 
  </Col>
  

    </Row>
  </Container>
  </Form>
  )
}

export default NewItem