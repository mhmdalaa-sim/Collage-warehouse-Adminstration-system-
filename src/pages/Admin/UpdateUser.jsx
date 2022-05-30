import React from 'react'
import {Form,FormControl,FormGroup,FormLabel,Row,Col,Button, Container} from 'react-bootstrap'
import logo1 from "../Assets/Path 666.svg"
function UpdateUser() {

    const inputstyle={
        marginTop:"5%",
        marginLeft:"5%"
      
    }
  return (
    <>
    
    <h1 style={{textAlign:"center",marginTop:"2%"}}>تعديل المستخدم</h1>
    <Container style={{justifyContent:"centre",width:"100%",}}>
  <Form>
    <Row >
        <Col><img src={logo1} style={{width:"50",height:"50%"}} /></Col>
        <Col></Col>
        <Col></Col>
    </Row>
  
    <Row> 
   
      <Col>
      <Row style={inputstyle}>
      <Form.Label>اسم المستخدم كما في البطاقه </Form.Label>
      <Form.Control type="text" placeholder="ادخل اسمك  كامل" />
      </Row>
  
      <Row style={inputstyle}>
      <Form.Label>الرقم القومي</Form.Label>
      <Form.Control type="number" placeholder="ادخل الرقم القومي" />
      </Row>
  
      <Row style={inputstyle}>
      <Form.Label>العنوان</Form.Label>
      <Form.Control type="text" placeholder="ادخل العنوان" />
      </Row>
  
      <Row style={inputstyle}>
      <Form.Label>الايميل</Form.Label>
      <Form.Control type="email" placeholder="ادخل الايميل" />
      </Row>
  
      </Col>
      <Col>
      <Row style={inputstyle}>
      <Form.Label>اسم المستخدم </Form.Label>
      <Form.Control type="text" placeholder="ادخل اسمك " />
      </Row>
  
      <Row style={inputstyle}>
      <Form.Label>كلمه المرور </Form.Label>
      <Form.Control type="password" placeholder="ادخل كلمه السر " />
      </Row>
  
      <Row style={inputstyle}>
      <Form.Label>تاكيد كلمه المرور </Form.Label>
      <Form.Control type="password" placeholder="ادخل كلمه السر " />
      </Row>
  
      <Row style={inputstyle}>
      <Form.Label>اختر نوع المستخدم</Form.Label>
      <Form.Select aria-label="Default select example">
    
    <option value="1">عميد</option>
    <option value="2">امين مخزن قسم</option>
    <option value="3">امين مخزن كليه</option>
    <option value="3">لجنه فحص</option>
    <option value="3">ادمن</option>
  </Form.Select>
      </Row>
      </Col>
    </Row>
  
    <Row  style={{justifyContent:"centre",width:"10%",  marginTop:"5%",
          marginLeft:".7%"
        }}>
      
      
  
  <Button type='submit' style={{backgroundColor:"#134D9A"}} size="lg">تاكيد</Button>
      
    </Row>
  
  </Form>
    </Container>
    </>
  )
}

export default UpdateUser