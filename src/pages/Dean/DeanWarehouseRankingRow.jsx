import React from 'react'
import Table from 'react-bootstrap/Table'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import{Link} from "react-router-dom"
function DeanWarehouseRankingRow({item}) {
  return (
    <>
    
    <tr class=" d-flex flex-row-reverse" >
    <td class="p-2 col px-1">
    {item.id}
    </td>
    <td class="p-2 col px-1"><Link to={`/DeanWareHouses/${item.id}`}>{item.name}</Link></td>
    <td class="p-2 col px-1">{item.Request} </td>
    <td class="p-2 col px-1">{item.Deprive} </td>
    <td class="p-2 col px-1">{item.Refund} </td>
  
  </tr>
    </>
  )
}

export default DeanWarehouseRankingRow