import React from 'react'
import {Form,FormControl,FormGroup,FormLabel,Row,Col,Button, Container} from 'react-bootstrap'
import logo1 from "../pages/Assets/Path 666.svg"
import AdminService from '../services/AdminService'
import { useEffect, useState } from "react";
import {useNavigate,Link} from 'react-router-dom';
import AdminSideNav from '../pages/Admin/AdminSideNav'

const NewUser=()=> {
  const [warehouses,setWarehouses]= useState([])
  const[fullname,setFullname]=useState('');
  const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[address,setAddress]=useState('');
    const[email_address,setEmail]=useState('');
    const[role,setRole]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[birthday,setBirthdate]=useState('');
    const[national_num,setNationalNum]=useState('');
    const[warehousename,setWarehouse]=useState('لايوجد');
    const[_available,setAvailable]=useState(true);
    const[salary,setSalary]=useState();
    const[date_of_assign,setDassign]=useState(new Date());
    const[date_of_resign,setDressign]=useState(null);
    const navigate =useNavigate();
    const[notificationNum,setNotificationNum]=useState(0);

    const inputstyle={
        marginTop:"5%",
        marginLeft:"5%",
        fontFamily: 'Lalezar',
        fontSize:"2rem"
    } 
    useEffect(()=>{
      AdminService.getAllWarehouses().then(response =>{
       setWarehouses(response.data);
      }).catch(error =>{

        console.log('something went wrong',error);
  
    })
    },[]);
    const saveUser=(e)=>{
      e.preventDefault();
      const user={fullname,username,password,address,phoneNumber,email_address,national_num,birthday,_available,notificationNum};
      
      const warehouse=warehouses.find(w=>(w.warehouse_name==warehousename));
      const rolen={user,warehouse,salary,role,date_of_assign,date_of_resign}
      AdminService.createUser(rolen).then(response=>{
        navigate('/UsersList');
    })
    .catch(error=>{
       console.log("Something went wrong",error);
    })}

   
  return (<>
  <AdminSideNav></AdminSideNav>
 
  <h1 style={{textAlign:"center",marginTop:"2%", fontFamily: 'Lalezar',
    fontSize:"4rem"}}>مستخدم جديد</h1>
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
    <Form.Control type="text" placeholder="ادخل اسمك  كامل"onChange={(e)=>setFullname(e.target.value)}/>
    </Row>

    <Row style={inputstyle}>
    <Form.Label>الرقم القومي</Form.Label>
    <Form.Control type="number" placeholder="ادخل الرقم القومي" onChange={(e)=>setNationalNum(e.target.value)}/>
    </Row>
    <Row style={inputstyle}>
    <Form.Label>العنوان</Form.Label>
    <Form.Control type="text" placeholder="ادخل العنوان"     onChange={(e)=>setAddress(e.target.value)}
 />
    </Row>

    <Row style={inputstyle}>
    <Form.Label>الايميل</Form.Label>
    <Form.Control type="email" placeholder="ادخل الايميل"   onChange={(e)=>setEmail(e.target.value)} />
    </Row>
    <Row style={inputstyle}>
    <Form.Label>اختر نوع المستخدم</Form.Label>
    <Form.Select aria-label="Default select example"     onChange={(e)=>setRole(e.target.value)}
>
<option>اختر الوظيفة  </option>

  <option value="عميد">عميد</option>
  <option value="امين مخزن قسم">امين مخزن قسم</option>
  <option value="امين مخزن كليه">امين مخزن كليه</option>
  <option value="لجنه فحص">لجنه فحص</option>
  <option value="ادمن">ادمن</option>


</Form.Select>
    </Row>
    {(role=='امين مخزن قسم')?
        <Row style={inputstyle}>
    <Form.Label>قسم</Form.Label>
    <Form.Select aria-label="Default select example"     onChange={(e)=>setWarehouse(e.target.value)}>      
        <option> اختر من الاقسام </option>
        {
          warehouses.length>0?warehouses.map(w=>
          (<option key={w.warehouse_id} value={w.warehouse_name}>{w.warehouse_name}</option>
                        )):<option>لايوجد اقسام</option>
            }
    </Form.Select>
    </Row>:<div></div>
}
    </Col>
    <Col>
    <Row style={inputstyle}>
    <Form.Label>اسم المستخدم </Form.Label>
    <Form.Control type="text" placeholder="ادخل اسمك "     onChange={(e)=>setUsername(e.target.value)}
 />
    </Row>

    <Row style={inputstyle}>
    <Form.Label>كلمه المرور </Form.Label>
    <Form.Control type="password" placeholder="ادخل كلمه السر "   onChange={(e)=>setPassword(e.target.value)}/>
    </Row>

    <Row style={inputstyle}>
    <Form.Label> تاريخ لميلاد </Form.Label>
    <Form.Control type="date" placeholder="ادخل تاريخ  ميلادك" onChange={(e)=>setBirthdate(e.target.value)}/>
    </Row>
    
    <Row style={inputstyle}>
    <Form.Label>تليفون المستخدم</Form.Label>
    <Form.Control type="text" placeholder="ادخل تليفون  "     onChange={(e)=>setPhoneNumber(e.target.value)}/>
    </Row>
   <Row style={inputstyle}>
    <Form.Label>مرتب المستخدم</Form.Label>
    <Form.Control type="text" placeholder="ادخل المرتب  "     onChange={(e)=>setSalary(e.target.value)}/>
    </Row>
    </Col>
  </Row>
  
  <Row  style={{justifyContent:"centre",width:"10%",  marginTop:"5%",
        marginLeft:".7%"
      }}>
    
    

    <Button onClick={(e)=>saveUser(e)} type='submit' style={{backgroundColor:"#134D9A"}} size="lg">تاكيد</Button>
    
  </Row>

</Form>
  </Container>
  </>
   
  )
}

export default NewUser