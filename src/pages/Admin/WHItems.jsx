import React from 'react'
import {useParams} from "react-router-dom"
import AdminSideNav from './AdminSideNav'
import ItemRow from '../../components/ItemRow'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import AdminService from'../../services/AdminService'
import {useEffect,useState} from "react"


const WHItems=()=> {
  const {id} =useParams();
    const [warehouse,setWarehouse] = useState('');
    const [ifUpdate,setIfUpdate]=useState(false);
    const [buttonName,setButtonName]=useState('تعديل');
    const [editType,setEditType]=useState('');
    const [newValue,setNewValue]=useState('');
    const [history,setEditHistory]=useState([]);
    const [ifshow,setIfShow]=useState(false);
    const [buttonHistoryName,setButtonHistoryName]=useState('اظهار سجل التعديلات');

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

       AdminService.getWarehouse(id).then(response=>{
      setWarehouse(response.data)});
      AdminService.getEditHistory(id,'warehouse').then(response=>{
        setEditHistory(response.data);

     }).catch(error =>{

      console.log('something went wrong',error);

    })
  },[])

  const saveUpdate=(e)=>{
    e.preventDefault();
    const holder={id,editType,newValue};
    AdminService.updateWarehouse(holder).then(response=>
        {
          window.location.reload(false);
        }).catch(error=>{
            console.log("something went wrong",error);
        })
    }
  return (
<>
<AdminSideNav></AdminSideNav>
<h1 style={{textAlign:"center", paddingTop:"5%"}}>{} اصناف المخزن رقم   </h1>



<Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%",marginLeft:"30%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>




<hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>


<Container fluid="md">
  <Row style={rowstyle}>
    
    <Col style={{textAlign:'center'}}>
    <Row fluid>
 
    <Col> <Form.Label ><h3> {warehouse.establishment_time} : تاريخ الانشاء   </h3></Form.Label>
  

    </Col>

    <Col> <Form.Label ><h3> : رئيس المخزن </h3></Form.Label>
    
    </Col>

    <Col> <Form.Label ><h3> موقع المخزن:{warehouse.location} </h3></Form.Label>
    <h2></h2>

    </Col>
   
    </Row>



    <Row fluid>
 
  


    <Col> <Form.Label ><h3> نوع المخزن : {warehouse.warehouse_type} </h3></Form.Label>
    
    </Col>

    <Col> <Form.Label ><h3>  اسم المخزن : {warehouse.warehouse_name} </h3></Form.Label>
    <h2></h2>

    </Col>
   
    </Row>
    
  </Col>
  </Row>
  <Row style={rowstyle}>

  <Col > <Form.Label  style={{marginLeft:"90%"}}>  <h3> الوصف</h3></Form.Label>
    <h4 style={{marginLeft:"70%"}}>{warehouse.description}</h4>
 </Col> 
  </Row>

  <hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px",color:"black"}}></hr>

 
  <Row style={rowstyle}>
  <Col style={{textAlign:'center'}}> 
    <h1>
        رؤساء سابقين للمخزن
    </h1>  
  </Col>
  


  </Row>

  <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>
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
 
 
 <Row className="justify-content-end">
        <Col sm m lg="auto" style={{marginRight:'45%'}}>
        <Button type="submit" onClick={(e)=>
            (ifUpdate)?
            [setIfUpdate(false)
              ,setButtonName('تعديل')]:[
            setIfUpdate(true)
           ,setButtonName('اخفاء')
            ]}
         style={{float:'left',color:'white', borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",backgroundColor:"red"
        }}>{buttonName}</Button>
        </Col>
      </Row>
        {(ifUpdate)?
        <Row>
        <Col>
        <Row style={inputstyle}>
    <Form.Label  style={{marginLeft:"70%"}}>اختر نوع التعديل</Form.Label>
    <Form.Select aria-label="Default select example"     onChange={(e)=>setEditType(e.target.value)}
   >
   <option>........</option>

  <option value="اسم المخزن">اسم المخزن</option>
  <option value="مكان المخزن">مكان مخزن</option>
  <option value="نوع المخزن"> نوع مخزن </option>
  <option value="وصف المخزن"> وصف مخزن </option>



     </Form.Select>
    </Row>
        <Row style={inputstyle}>
        <Form.Label></Form.Label>
        <Form.Control type="text"  onChange={(e)=>setNewValue(e.target.value)} />
        </Row>
    
        <Button onClick={(e)=>saveUpdate(e)} type='submit' style={{marginLeft:"45%",backgroundColor:"#134D9A"}} size="lg">تاكيد</Button>

        </Col>
        </Row>
        
        
        
        
        :<div></div>}
      


      
      

</Container>



</>
  )
}

export default WHItems