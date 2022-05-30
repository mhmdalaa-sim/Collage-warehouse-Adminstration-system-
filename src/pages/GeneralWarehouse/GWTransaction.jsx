import React, { useEffect } from 'react'
import{Link} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { Container,Row,Col,Button,Form,FormControl } from 'react-bootstrap'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import AdminService from '../../services/AdminService'
import Carts from './Carts.json'


function GWTransaction({row}) {
   const[ch,setCh] = useState(false);
  useEffect(()=>{
    
    if(Carts.requests_nums.find(it=>it.request_id == row.request_id))
    setCh(true);
    
    else setCh(false);

  },[])

  const[allowed_quantity,setallowed_quantity]=useState('');
  const navigate =useNavigate();

    const save=(e)=>{
    e.preventDefault();
    navigate('');
  }  
  const handleClick = (e) => {
   
    if(e.target.checked){
      Carts.requests_nums[Carts.requests_nums.length] = row;
      setCh(true)
      console.log(Carts);
    }
    else {
      Carts.requests_nums = Carts.requests_nums.filter(it => it.request_id != row.request_id)
      setCh(false)
      console.log(Carts);

    }
  }
 
  return (
<>

  
<tr class=" d-flex flex-row-reverse" >
    <td><Form.Check style  ={{paddingLeft:"22px",fontSize:"200%",marginTop:"-17px"}} aria-label="option 1" onClick={(e) => handleClick(e)} checked = {ch}></Form.Check> </td>
    <td class="p-2 col px-1" style={{textAlign:"center",fontSize :"22px"}}>{row.item.item_name}</td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"22px"}}>{row.requested_quantity}</td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"22px"}}>{row.allowed_quantity}</td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"22px"}}>{row.exchange_reason}</td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"22px"}}>{row.notes}</td>

  </tr>
  </>
  )
}

export default GWTransaction