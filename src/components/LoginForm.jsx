import React from 'react'
import { useState } from 'react'
import { Container,Row,Col,Button,Form,FormLabel,FormControl,InputGroup } from 'react-bootstrap'
import {Link, useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom"
function LoginForm({Login,error}) {
    const[details,setDetails]=useState({name:"",email:"",password:""})
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate()

    const submitHandler=e=>{

        e.preventDefault();

        Login(details)

        
    }
  return (
    <>
    <Container style={{textAlign:"centre",marginTop:"20%",marginRight:"6%", fontFamily: 'Lalezar',
    fontSize:"2rem"}}>
    <Form noValidate validated={validated} onSubmit={submitHandler}  >
    
        
    <Row className="mb-3">

    {(error!="")?(<div className='error'>{error}</div>):""}

      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>اسم المستخدم</Form.Label>
        <Form.Control type= "text" name="name" id ="name" onChange={e=>setDetails({...details, name:e.target.value})} value={details.name} required/>
        <Form.Control.Feedback type="invalid">
          ادخل اسم المستخدم من فضلك.
        </Form.Control.Feedback>
      </Form.Group>
      
    </Row>

    <Row className="mb-3">

    
<Form.Group as={Col} md="6" controlId="validationCustom03">
  <Form.Label>البريد الاكتروني </Form.Label>
  <Form.Control type= "email" name="email" id ="email" onChange={e=>setDetails({...details, email:e.target.value})} value={details.email} required />
  <Form.Control.Feedback type="invalid">
    ادخل البريد الالكتروني  من فضلك.
  </Form.Control.Feedback>
</Form.Group>

</Row>


<Row className="mb-3">

    
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>كلمة المرور </Form.Label>
        <Form.Control  type= "pasword" name="password" id ="password" onChange={e=>setDetails({...details, password:e.target.value})} value={details.password} required />
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


    
    <Button type="submit" value="LogIn" style={{textAlign:"centre",marginRight:"52%", fontFamily: 'Lalezar',
    fontSize:"2rem"}} >تسجيل الدخول </Button>
          
    
 
  </Form>

  </Container>
    </>
  )
}

export default LoginForm