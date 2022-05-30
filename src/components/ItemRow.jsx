import React from 'react'
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import{Link} from "react-router-dom"
import AdminService from '../services/AdminService'
import {useNavigate} from "react-router-dom"
function ItemRow({item}) {
  const navigate =useNavigate();

    const style={
        backgroundColor:"white",
        color:"black",
        borderRadius: "10px",
        marginTop:"3%",
        padding:"1%",
        border: '5px solid #448AE5', 

        fontFamily: 'Lalezar',
  
    }


    const rowstyle={
      fontFamily: 'Lalezar',
    fontSize:"1.5rem"
    }

    const deleteItem=(e)=>{
      console.log(item.item_id);
      AdminService.removeItem(item.item_id).then(response=>
         {
           window.location.reload(false);
 
         }).catch(error=>{
             console.log("something went wrong",error);
         })
     }
  return (
    <Container style={style}>
    <Row className="justify-content-end">
    
    <Col >
    <Button type="submit" onClick={(e)=>deleteItem(e)} style={{float:'left',backgroundColor:"#448AE5",color:'white',fontFamily: 'Lalezar',
    fontSize:"1.5rem", borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",
    }}>مسح</Button>
    
    <Link to={`/ExamineMain/item/${item.item_id}`}><Button type="submit" style={{float:'left',backgroundColor:"#448AE5",color:'white',fontFamily: 'Lalezar',
    fontSize:"1.5rem", borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",
    }}>تعديل</Button></Link>
    
    </Col>
    
    <Col sm m lg="auto">
    <h5 style={rowstyle}> الوحدة  : {item.unit}</h5>
    </Col>
    
    
    <Col sm m lg="auto">
    <h5 style={rowstyle}> الفئة  : {item.category} </h5>
    
    
    </Col>
    
    <Col sm m lg="auto">
    <h5 style={rowstyle}> اسم الصنف : {item.item_name}</h5>
    </Col>
    
    <Col sm m lg="auto">
    <h5 style={rowstyle}>  {item.item_id}: رقم الصنف</h5>
    </Col>
    
    </Row>
    
    
    </Container>
  )
}

export default ItemRow