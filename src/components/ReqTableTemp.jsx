import React from 'react'
import{Link} from "react-router-dom"
import Table from 'react-bootstrap/Table'
function ReqTableTemp({item}) {
  return (
    <>

  
    <tr class=" d-flex flex-row-reverse" >
        <td class="p-2 col px-1">
        <Link to={`/ExamineMain/item/${item.id}/${item.Name}`}>{item.id}</Link>
        </td>
        <td class="p-2 col px-1">{item.Name}</td>
        <td class="p-2 col px-1">-</td>
        <td class="p-2 col px-1">{item.Quantity}</td>
        <td class="p-2 col px-1">{item.Quantity}</td>
        <td class="p-2 col px-1"></td>
        <td class="p-2 col px-1"></td>
        <td class="p-2 col px-1">{item.Value}</td>
        <td class="p-2 col px-1"></td>
        <td class="p-2 col px-1"></td>
        
      </tr>
  
      </>
  )
}

export default ReqTableTemp