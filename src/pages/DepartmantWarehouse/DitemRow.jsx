import React from 'react'
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import{Link} from "react-router-dom"
function DitemRow({item}) {

    
  return (
    
    <>

  
<tr class=" d-flex flex-row-reverse" >
    <td class="p-2 col px-1">
    <Link to={`/Departmentitem/${item.id}/${item.Name}`}>{item.id}</Link>
    </td>
    <td class="p-2 col px-1">{item.Name}</td>
    <td class="p-2 col px-1">{item.date}</td>
  
  </tr>

  </>
    
    
    
    
    
  )
}

export default DitemRow
