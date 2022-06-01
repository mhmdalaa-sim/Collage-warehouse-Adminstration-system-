import React from 'react'
import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact'
function LineChart() {

    const [data] = useState({
        labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يولو',"اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر"],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(50, 116, 203, 0.7)',
            borderColor: 'rgb(194, 116, 161)',
            
            data: [65, 59, 90, 81, 56, 55, 40,45,60,70,35,40],
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(71, 225, 167, 0.5)',
            borderColor: 'rgb(71, 225, 167)',
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      });
    
  return (
    <CDBContainer style={{fontFamily: 'Lalezar',
    fontSize:"2rem"}}>
       <h1 style={{textAlign:"center",marginTop:"5%",   fontFamily: 'Lalezar',
    fontSize:"4rem"}}> معدل نشاط المستخدمين   </h1>
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
  )
}

export default LineChart