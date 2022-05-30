import React from 'react'
import  { useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact'
function DepartmentBarChart() {


    const [data] = useState({
        labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يولو',"اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر"],
        
        datasets: [
          {
            label: 'عدد الطلبات',
            backgroundColor: 'rgba(50, 116, 203, 0.7)',
            borderColor: 'rgb(194, 116, 161)',
            data: [65, 59, 90, 81, 56, 55, 40,45,60,70,35,40],
          }
          
        ],
      });
  return (
    <CDBContainer>
   <h1 style={{textAlign:"center",marginTop:"5%",   fontFamily: 'Lalezar',
    fontSize:"4rem"}}> معدل نشاط المخزن   </h1>
    <HorizontalBar data={data} options={{ responsive: true }} />
  </CDBContainer>
  )
}

export default DepartmentBarChart