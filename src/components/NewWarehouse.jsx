import React from 'react'
import {Form,FormControl,FormGroup,FormLabel,Row,Col,Button, Container} from 'react-bootstrap'
import logo1 from "../pages/Assets/Path 666.svg"
import AdminService from '../services/AdminService'
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import AdminSideNav from '../pages/Admin/AdminSideNav';
const NewWarehouse=()=> {
    const[warehouse_name,setName]=useState('');
      const[location,setLocation]=useState('');
      const[phone_number,setPhoneNum]=useState('');
      const[establishment_time,setdate]=useState('');
      const[warehouse_type,setType]=useState('');
      const[_available,setAvailable]=useState(true);
      const[description,setDescription]=useState('');
      const navigate =useNavigate();

    const inputstyle={
        marginTop:"5%",
        fontFamily: 'Lalezar',
        fontSize:"2rem"
    }

    const lableStyle={
        marginTop:"3.5%",
        fontFamily: 'Lalezar',
        fontSize:"2rem"
    }
    const saveWarehouse=(e)=>{
        e.preventDefault();
        const warehouse={warehouse_name,warehouse_type,location,phone_number,description,establishment_time,_available};
        AdminService.createWarehouse(warehouse).then(response=>{
            navigate('/WareHouses');
      })
      .catch(error=>{
         console.log("Something went wrong",error);
      })}
  return (
<>
<AdminSideNav></AdminSideNav>
<h1 style={{textAlign:"center",marginTop:"5%",fontFamily: 'Lalezar',
    fontSize:"4rem"}}>مخزن جديد</h1>

<Container fluid style={{padding:"5%"}}>

<Form>
    <Row>
    <Col> <img src={logo1} style={{width:"50%",height:"50%"}} /></Col>
    <Col>
    <Row style={inputstyle}>
    <Form.Control placeholder="ادخل اسم المخزن" onChange={(e)=>setName(e.target.value)}/>
    </Row> 
    <Row style={inputstyle}>
    <Form.Control placeholder="ادخل نوع المخزن" onChange={(e)=>setType(e.target.value)}/>
    </Row> 
    <Row style={inputstyle}>
    <Form.Control type="text" placeholder="ادخل موقع المخزن" onChange={(e)=>setLocation(e.target.value)} />
    </Row> 
    <Row style={inputstyle}>
    <Form.Control type="text" placeholder="ادخل رقم هاتف المخزن" onChange={(e)=>setPhoneNum(e.target.value)} />
    </Row> 
    <Row style={inputstyle}>
    <Form.Control type="date" name='date' onChange={(e)=>setdate(e.target.value)}/>
    </Row> 
    </Col>

    <Col>
    <Row style={lableStyle}>
    <Form.Label><h3>القسم التابع له المخزن</h3></Form.Label>
        </Row>
       < Row style={lableStyle}>
    <Form.Label><h3> نوع المخزن</h3></Form.Label>
        </Row>  
        <Row style={lableStyle}>
    <Form.Label><h3>موقع المخزن</h3></Form.Label>
        </Row>   
        <Row style={lableStyle}>
    <Form.Label><h3> رقم هاتف المخزن</h3></Form.Label>
        </Row>  
        <Row style={lableStyle}>
    <Form.Label><h3>تاريخ الانشاء</h3></Form.Label>
        </Row>  
         </Col>
    

    </Row>

    <Row style={{justifyContent:"centre",width:"100%",}}>
    <Col ></Col>
    <Col style={{textAllign:"centre"}}> <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{textAlign:"center"}} >
      <Form.Label ><h3   style={{textAlign:"center",marginTop:"5%"}}>الوصف</h3></Form.Label>
      <Form.Control as="textarea" rows={3} onChange={(e)=>setDescription(e.target.value)} />
    </Form.Group></Col>
    <Col > </Col>
   
    </Row>

    <Button type='submit'  onClick={(e)=>saveWarehouse(e)} style={{marginTop:"5%",marginLeft:"5%"}}  size="lg">اضافه</Button>
    </Form>
</Container>
</>
  )
}
export default NewWarehouse