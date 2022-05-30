import React from 'react'
import {useParams} from "react-router-dom"
import { Container,Row,Col,Button,Form} from 'react-bootstrap'
import logo3 from "../Assets/Path 666.svg"
import logo4 from "../Assets/accept.svg"
import AdminService from'../../services/AdminService'
import {useEffect,useState} from "react"

function User() {
  const {id} = useParams()
  const [role,setRole] = useState('');
  const [ifUpdate,setIfUpdate]=useState(false);
  const [ifshow,setIfShow]=useState(false);
  const [editType,setEditType]=useState('');
  const [buttonName,setButtonName]=useState('تعديل');
  const [buttonHistoryName,setButtonHistoryName]=useState('اظهار سجل التعديلات');
  const [newValue,setNewValue]=useState('');
  const [history,setEditHistory]=useState([]);
  
  const inputstyle={
    marginTop:"5%",
    marginLeft:"5%",
    fontFamily: 'Lalezar',
    fontSize:"2rem"
   }
  const rowstyle={

    marginTop:"5%"
  }
  useEffect(()=>{
      AdminService.getUser(id).then(response=>{
        setRole(response.data);})
        console.log(id)
      AdminService.getEditHistory(id,'user').then(response=>{
        setEditHistory(response.data);
   })
   
   .catch(error =>{
  console.log('something went wrong',error);

   })


},[id])


const saveUpdate=(e)=>{
e.preventDefault();
const holder={id,editType,newValue};
AdminService.updateItem(holder).then(response=>
    {
      window.location.reload(false);
    }).catch(error=>{
        console.log("something went wrong",error);
    })
}
  return (<>
  <Container fluid="md">
  <Row style={rowstyle}>
    <Col fluid>
    <img src={logo3} style={{width:"30%"}} />
    </Col>
    <Col style={{textAlign:'center'}}>
    <Row fluid>
    <Col> <Form.Label ><h3>الدور</h3></Form.Label>
    <h4>          {role.role}     </h4>
    </Col>
 
    <Col> <Form.Label ><h3> الرقم القومي </h3></Form.Label>
    <h4>{role.user.national_num}</h4>

    <Col> <Form.Label ><h3> اسم المستخدم بالكامل</h3></Form.Label>
    <h4>{role.user.fullname}</h4>

    </Col>
    </Col>
    <Col> <Form.Label ><h3> رقم المستخدم</h3></Form.Label>
    <h4>{role.user.user_id}</h4>

    </Col>

    
   
    </Row>
    
  </Col>
  </Row>
  <Row style={rowstyle}>

  <Col> <Form.Label ><h3> اسم المستخدم </h3></Form.Label>
    <h4>{role.user.username}</h4>
    </Col>

    <Col> <Form.Label ><h3>رقم هاتف المستخدم</h3></Form.Label>
    <h4>{role.user.phoneNumber}</h4>

    </Col>
    <Col> <Form.Label ><h3> عنوان المستخدم</h3></Form.Label>
    <h4>{role.user.address}</h4>

    </Col>
    <Col> <Form.Label ><h3> تاريخ الميلاد </h3></Form.Label>
    <h4>{role.user.birthday}</h4>

    </Col>
 
 {(ifshow)?
          history.length>0?[(
          <Row style={{marginLeft:"6%",marginTop:"6%"}}>
          <Col>
           <h4 style={{marginTop:"3%", fontFamily: 'Lalezar'
                        }}>تاريخ التعديل</h4>
              </Col>
              <Col>
           <h4 style={{marginTop:"3%", fontFamily: 'Lalezar'
                        }}>القيمة السابقة</h4>
              </Col>
              <Col>
           <h4 style={{marginTop:"3%", fontFamily: 'Lalezar'
                        }}>نوع التعديل</h4>
              </Col>
          </Row>),
          history.map(result=>
          (<Row key={result.admin_edit_details_id} style={{marginLeft:"6%"}}>
          <Col> <Form.Label ></Form.Label>
           <h4>{result.adminAction.action_date}</h4>
              </Col>
          < Col> <Form.Label ></Form.Label>
            <h4>{result.old_value}</h4>
              </Col>
           <Col> <Form.Label ></Form.Label>
            <h4>{result.edit_type}</h4>
              </Col>

          </Row>
                        
          ))]:<h1 style={{textAlign:"center" ,marginTop:"3%", fontFamily: 'Lalezar',
                        fontSize:"4rem"}}>لا توجد تعديلات سابقة</h1>
            :<div></div>}
      </Row>
      <Row style={{marginLeft:"40%"}}>
        <Col sm m lg="auto">
        <Button type="submit" onClick={(e)=>
            (ifshow)?
            [setIfShow(false)
              ,setButtonHistoryName('اظهار سجل التعديلات')]:[
                setIfShow(true)
           ,setButtonHistoryName('اخفاء سجل التعديلات')
            ]}
         style={{marginTop:"70%",float:'left',color:'white', borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",backgroundColor:"red"
        }}>{buttonHistoryName}</Button>
        </Col>
      </Row>
 
        {(ifUpdate)?
        <Row>
        <Col>
        <Row style={inputstyle}>
    <Form.Label>اختر نوع التعديل</Form.Label>
    <Form.Select aria-label="Default select example"     onChange={(e)=>setEditType(e.target.value)}
   >
   <option>........</option>

  <option value="اسم المستخدم" >اسم المستخدم</option>
  <option value="اسم المستخدم الكامل">"اسم المستخدم الكامل </option>
  <option value="العنوان">  العنوان </option>
  <option value="رقم الهاتف">  رقم الهاتف </option>
  <option value="الرقم القومي">  الرقم القومي </option>
  <option value="تاريخ الميلاد">  تاريخ الميلاد </option>

     </Form.Select>

        </Row>
        <Row style={inputstyle}>
        <Form.Label></Form.Label>
        <Form.Control type="text"  onChange={(e)=>setNewValue(e.target.value)} />
        </Row>
    
    
  <button onClick={(e)=>saveUpdate(e)} type='submit' style={{marginLeft:"45%",backgroundColor:"white",marginTop:"6%",borderColor:"white",borderStyle:"none" }}><img src={logo4} style={{width:"100%",backgroundColor:"white",marginTop:"5%",}} /></button> 
  </Col>
        </Row>
        
        
        
        
        :<div></div>}
      <Row style={{marginLeft:"43%"}}>
        <Col sm m lg="auto">
        <Button type="submit" onClick={(e)=>
            (ifUpdate)?
            [setIfUpdate(false)
              ,setButtonName('تعديل')]:[
            setIfUpdate(true)
           ,setButtonName('اخفاء')
            ]}
         style={{marginTop:"70%",float:'left',color:'white', borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",backgroundColor:"red"
        }}>{buttonName}</Button>
        </Col>
      </Row>

</Container>

    
  </>
    
    
  )
}

export default User