import React from 'react'
import {Link, useParams} from "react-router-dom"
import { Container,Row,Col,Button,Form,FormLabel,FormControl,InputGroup } from 'react-bootstrap'
import {useState} from "react";
import { useNavigate } from "react-router-dom"
function LogIn() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate()
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (

    <Container style={{textAlign:"centre",marginTop:"20%",marginRight:"6%", fontFamily: 'Lalezar',
    fontSize:"2rem"}}>
    <Form noValidate validated={validated} onSubmit={handleSubmit}  >
    
        
    <Row className="mb-3">

    
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>اسم المستخدم</Form.Label>
        <Form.Control type="text" placeholder="" required />
        <Form.Control.Feedback type="invalid">
          ادخل اسم المستخدم من فضلك.
        </Form.Control.Feedback>
      </Form.Group>
      
    </Row>

    <Row className="mb-3">

    
<Form.Group as={Col} md="6" controlId="validationCustom03">
  <Form.Label>البريد الاكتروني </Form.Label>
  <Form.Control type="text" placeholder="" required />
  <Form.Control.Feedback type="invalid">
    ادخل البريد الالكتروني  من فضلك.
  </Form.Control.Feedback>
</Form.Group>

</Row>


<Row className="mb-3">

    
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>كلمة المرور </Form.Label>
        <Form.Control type="password" placeholder="" required />
        <Form.Control.Feedback type="invalid">
          ادخل كلمه المرور من فضلك.
        </Form.Control.Feedback>
      </Form.Group>
      
    </Row>

    <Row className="mb-3">

    
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label> في حاله نسيان اي من البيانات المطلوبه برجاء التواصل مع ادمن النظام </Form.Label>
        
      </Form.Group>
      
    </Row>


    <Link to="/MainControl">
    <Button type="submit" style={{textAlign:"centre",marginRight:"52%", fontFamily: 'Lalezar',
    fontSize:"2rem"}} >تسجيل الدخول </Button>
          </Link>
    
 
  </Form>

  </Container>
  )
}

export default LogIn