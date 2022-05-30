import React, { useEffect } from 'react'
import{Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import { Container,Row,Col,Button,Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import AdminService from '../../services/AdminService'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import TransactionRow from './TransactionRow'
import TransactioRow from './TransactionRow'
import Carts from './Carts.json'
function AddDeleteTableRowsTrans({notes}){


  const [ReqList,setReqlist] = useState([]);
  const [cond,setCond] = useState(true);
  const [list , setList] = useState([]);



    useEffect(() => {
      setReqlist(Carts.requests_nums)

    setCond(false)
    },[]);

    const navigate = useNavigate();
    
    const saveTrans=(e)=>{
        e.preventDefault();
   const input={list,notes}
   console.log(input)
   AdminService.makeTransaction(input).then()
   
      navigate('/GeneralWarehouse')
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
    if(cond) return <h1>PLEASE WAIT...</h1>
    else 
  return (
<>



<Table striped bordered hover size="lg" style={tablestyle} >
  <thead>
    <tr class=" d-flex flex-row-reverse  ">
    <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>رقم الطلب</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>اسم الصنف</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}> الكميه المطلوبه</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>الكميه المصرح بها</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>رقم المخزون</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>سعر المخزون</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>تاريخ إنتهاء المخزون</th>
      <th class="p-2 col px-2"style={{textAlign:"center",fontSize :"30px"}}>  الكمية المحولة</th>

    

      
    </tr>
  </thead>

  <tbody>
  {
  ReqList.map((row)=>{

return <TransactioRow Key={row.request_id} row={row} list={list}  ></TransactioRow>
})}
  </tbody>
 
</Table>
<Button type="submit" style={{
    marginLeft:"10%",fontFamily: 'Lalezar',
        fontSize:"2rem" ,marginTop:"1%",borderRadius: "10px",
}} onClick={(e)=>saveTrans(e)}>تاكيد </Button>
        </>



    
  )
}

export default AddDeleteTableRowsTrans