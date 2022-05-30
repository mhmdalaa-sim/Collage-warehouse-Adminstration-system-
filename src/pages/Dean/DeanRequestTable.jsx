import React, { useEffect } from 'react'
import{Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import { Container,Row,Col,Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import DeanReqTableTemp from './DeanReqTableTemp'
import AdminService from '../../services/AdminService'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import DeanSideNav from './DeanSideNav'
function DeanRequestTable({tdata}) {

  const {id} = useParams()
  const [list,setlist] = useState([]);
  const [cond,setCond] = useState(true);
    useEffect(() => {
      fetch(`https://alexsci-warehouse.herokuapp.com/fwk/1/requests/${id}`)
      // AdminService.getlist()
      .then(res => res.json())
      .then((data)=>{
        setlist(data);
        setCond(false);
      });
    },[]);

    const navigate =useNavigate();
    
    const savelist=(e)=>{
        e.preventDefault();
        AdminService.setAllowedQuantities(id,list);
        navigate('/Dean/Requests');      
        }

    const tablestyle={

        float:"centre",
        width:"80%",
        margin:"5%",
        fontFamily: 'Lalezar',
        fontSize:"3rem"

    }

    const style={
        
        color:"black",
        borderRadius: "10px",
        marginTop:"5%",
        padding:"1%",
        
        fontFamily: 'Lalezar',
        fontSize:"3rem"
    }
    if(cond) return <h1>LOADING....</h1>
    else
  return (
<>

 
{console.log('hello')}
{console.log(list)}
{console.log(id)}
 <h1 style={{textAlign:"center",fontFamily: 'Lalezar',
        fontSize:"4rem",paddingTop:"5%"}}>{id} طلب ازن وصرف    </h1>
<DeanSideNav></DeanSideNav>
        <Container style={style}>
  <Row className="justify-content-centre">
    <Col>
        <h3>:التاريخ</h3>
    </Col>

    <Col>
    <Row><h3>:رقم الازن</h3></Row>
    <Row><h3>: سند الصرف</h3></Row>
        
    </Col>

    <Col>
    <Row><h3>  : مخزن</h3></Row>
    <Row><h3> {list[0].action.action_id} : تاريخ الطلب</h3></Row>
    <Row><h3>:اسم الطلب (المخزن/الإدارة/العامل)</h3></Row>
        
    </Col>


  </Row>
  

</Container>


<Table striped bordered hover size="lg" style={tablestyle} >
  <thead>
    <tr class=" d-flex flex-row-reverse  ">
      <th class="p-2 col px-2">اسم الصنف</th>
      <th class="p-2 col px-2"> الكميه المطلوبه</th>
      <th class="p-2 col px-2">الكميه المصرح بها</th>
      <th class="p-2 col px-2">سند الصرف</th>
      <th class="p-2 col px-2">  الملاحظات</th>
      
    </tr>
  </thead>

  <tbody>
  {
  list.map((row)=>{

return <DeanReqTableTemp Key={row.request_id} row={row} Accepted_Quanitiy></DeanReqTableTemp>
})}
  </tbody>
 
</Table>


<Button type="submit" style={{
    marginLeft:"10%",fontFamily: 'Lalezar',
        fontSize:"2rem"
}}  onClick={(e)=>savelist(e)} >تاكيد</Button>
    </>
  )
}

export default DeanRequestTable