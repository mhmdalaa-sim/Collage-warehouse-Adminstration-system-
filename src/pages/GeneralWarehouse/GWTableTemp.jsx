import React, { useEffect } from 'react'
import{Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import { Container,Row,Col,Button,Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import AdminService from '../../services/AdminService'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import GWTransaction from './GWTransaction'
function GWTableTemp(){

  const {id} = useParams()
  const [list,setlist] = useState([]);
  const [cond,setCond] = useState(true);
  const [cond2,setCond2] = useState(true);
  const [warehouse,setWarehouse] = useState({});
    useEffect(() => {
      fetch(`http://localhost:8080/fwk/1/requests/${id}`).then(res => res.json()).then(data=> {setlist(data);setCond(false);}) 
      // setCond(false);
      fetch(`http://localhost:8080/dean/1/warehouse/${id}`).then(res => res.json()).then(data=> {setWarehouse(data);setCond2(false);}) 
    },[id]);

    const navigate = useNavigate();
    
    const savelist=(e)=>{
        e.preventDefault();
        AdminService.setAllowedQuantities(id,list);
        navigate('/Dean/Requests');      
        }

    const tablestyle={

        float:"centre",
        width:"95%",
        margin:"3%",
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
    if(cond || cond2 ) return <h1>LOADING....</h1>
    else
  return (
<>
{console.log('hello')}
{console.log(list)}
{console.log(id)}
 <h1 style={{textAlign:"center",fontFamily: 'Lalezar',
        fontSize:"4rem",paddingTop:"5%"}}> طلب إذن وصرف    </h1>

        <Container style={style}>

        <Row>
          <Col>
          <h3 style={{textAlign:"center"}}> {list[0].action.action_id} : رقم الطلب</h3>
          </Col>
        </Row>
  <Row className="justify-content-centre">
    <Col>
    <h3> {list[0].action.action_date} : تاريخ الطلب</h3>
    </Col>

   
    <Col>
    <Row><h3 style={{marginLeft:"70%"}}>  مخزن : { warehouse.warehouse_name}</h3></Row>
   
        
    </Col>


  </Row>
  

</Container>


<Table striped bordered hover size="lg" style={tablestyle} >
  <thead>
    <tr class=" d-flex flex-row-reverse  ">
    <th>----</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>اسم الصنف</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}> الكميه المطلوبه</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>الكميه المصرح بها</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>سند الصرف</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>  الملاحظات</th>
    

      
    </tr>
  </thead>

  <tbody>
  {
  list.map((row)=>{

return <GWTransaction Key={row.request_id} row={row} Accepted_Quanitiy></GWTransaction>
})}
  </tbody>
 
</Table>



    </>
  )
}

export default GWTableTemp