import React from 'react'
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
function RankingTable() {

       
        
  return (
    <CDBContainer>
    <CDBTable style={{backgroundColor:'rgba(50, 116, 203, 0.2)',fontFamily: 'Lalezar',
                        fontSize:"2rem"}} striped>
      <CDBTableHeader>
        <tr>
          <th>#</th>
          <th>اسم</th>
          <th>دور</th>
         
        </tr>
      </CDBTableHeader>
      <CDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
         
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          
        </tr>
      </CDBTableBody>
    </CDBTable>
  </CDBContainer>
  )
}

export default RankingTable