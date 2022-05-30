import React from 'react'
import  { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact'
function DepartmentitemsChart() {

    const [data] = useState({
        labels: ['item1', 'Item2', 'item3', 'item4', 'item5', 'item6', 'item7'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(50, 116, 203, 0.7)',
            borderColor: 'black',
            data: [65, 59, 90, 81, 56, 55, 40],
          },
         
        ],
      });
  return (
    <CDBContainer>
  <h1 style={{textAlign:"center",marginTop:"5%",   fontFamily: 'Lalezar',
    fontSize:"4rem"}}> اكثر الاصناف طلبا   </h1>
    <Pie data={data} options={{ responsive: true }} />
  </CDBContainer>
  )
}

export default DepartmentitemsChart