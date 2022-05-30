import React from 'react'
import{Link} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { Container,Row,Col,Button,Form,FormControl } from 'react-bootstrap'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import AdminService from '../../services/AdminService'



function DeanReqTableTemp({item}) {

  const[allowed_quantity,setallowed_quantity]=useState('');
  const navigate =useNavigate();

  const saveItem=(e)=>{
    e.preventDefault();
    const item={allowed_quantity}
    AdminService.createItem(item).then(response=>{
      navigate('');
  }
  )
  .catch(error=>{
     console.log("Something went wrong",error);
  })}


    
  return (
<>

  
<tr class=" d-flex flex-row-reverse" >
    <td class="p-2 col px-1">
    <Link to={`/ExamineMain/item/${item.id}/${item.Name}`}>{item.id}</Link>
    </td>
    <td class="p-2 col px-1">{item.Name}</td>
    <td class="p-2 col px-1">-</td>
    <td class="p-2 col px-1">{item.Quantity}</td>
    <td class="p-2 col px-1"><Form.Control type="number" onChange={(e)=>setallowed_quantity(e.target.value)}/></td>
    <td class="p-2 col px-1"></td>
    <td class="p-2 col px-1"></td>
    <td class="p-2 col px-1">{item.Value}</td>
    <td class="p-2 col px-1"></td>
    <td class="p-2 col px-1"></td>
    
  </tr>

  </>
  )
}

export default DeanReqTableTemp