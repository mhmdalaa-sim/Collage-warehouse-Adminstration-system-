import React from 'react'
import Table from 'react-bootstrap/Table'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import DeanWarehouseRankingRow from './DeanWarehouseRankingRow'

function WarehouseRanking({R}){

  const tablestyle={

    float:"centre",
    width:"80%",
    marginLeft:"15%",
    marginTop:"5%",
    fontFamily: 'Lalezar',
fontSize:"5rem"

}
  return (
    <>
        <Table striped bordered hover size="lg" style={tablestyle} >
<thead>
<tr class=" d-flex flex-row-reverse  ">
  <th class="p-2 col px-1 ">رقم المخزن</th>
  <th class="p-2 col px-1">اسم المخزن</th>
  <th class="p-2 col px-1"> عدد الطلبات</th>
  <th class="p-2 col px-1"> عدد الجرود </th>
  <th class="p-2 col px-1"> عدد  </th>
  
  
</tr>
</thead>

<tbody>

{R.map((item)=>{

return <DeanWarehouseRankingRow
 Key={item.id} item={item}></DeanWarehouseRankingRow>
})}
</tbody>

</Table>

    </>
  )
}

export default WarehouseRanking