import React from 'react'
import{Link} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { Container,Row,Col,Button,Form,FormControl } from 'react-bootstrap'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import AdminService from '../../services/AdminService'
function DeanDepTableTemp({item}) {
  return (
    <>

  
    <tr class=" d-flex flex-row-reverse" >
        <td class="p-2 col px-1">
        <Link to={`/ExamineMain/item/${item.id}/${item.Name}`}>{item.id}</Link>
        </td>
        <td class="p-2 col px-1">{item.Name}</td>
        <td class="p-2 col px-1">-</td>
        <td class="p-2 col px-1">{item.Quantity}</td>
        <td class="p-2 col px-1"> </td>
        <td class="p-2 col px-1"></td>
        <td class="p-2 col px-1"></td>
        <td class="p-2 col px-1"></td>
        <td class="p-2 col px-1"></td>
        <td class="p-2 col px-1">{item.Value}</td>
        <th class="p-2 col px-2"> </th>
        
      </tr>
    
      </>
  )
}

export default DeanDepTableTemp