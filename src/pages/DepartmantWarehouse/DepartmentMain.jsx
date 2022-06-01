import React from 'react'
import{Link} from "react-router-dom"
import logo1 from '../Assets/documents.png'
import logo2 from '../Assets/add.png'
import logo3 from '../Assets/refund.png'
import { Container ,Row,Col,Card, } from 'react-bootstrap'
import DepartmentBarChart from './DepartmentBarChart'
import DepartmentitemsChart from './DepartmentitemsChart'
import DepartmentSideNav from './DepartmentSideNav'
import Notification from '../../components/Notification'
import NotifyData from '../../data/NotifyData'
import { useState } from 'react'




function DepartmentMain() {

  const [notify,setNotify]=useState(NotifyData)

  const navbar = {backgroundColor: '#448AE5',

  fontFamily: 'Lalezar',
  fontSize:"1.4rem",
  marginRight:"5px"
};
  const navstyle={
  color:"white",
  
                  }   

                  const dropnavbar = {backgroundColor: '#448AE5',
                  paddingTop:"1%",
                  color:"white",
              
              };
  return (
  
  
    <>
  <Notification data={notify}></Notification>
      <DepartmentSideNav></DepartmentSideNav>
  <Container>

      
<Row className="justify-content-end">

    <Col>
        <Container style={{backgroundColor: '#448AE5',color:"white",
          borderRadius: "10px",
          borderStyle:"solid",
          borderColor: "#15509D",
          marginTop:"10%",
          padding:"10%",}}>

              <Row>
              <h1 style={{textAlign:"center" , fontFamily: 'Lalezar',
              fontSize:"2rem",paddingBottom:"9%"}}> عدد استمارات الصرف </h1>
                      
              </Row>

          <Row> <Col><img src={logo1} style={{width:"60%"}}></img></Col> 

          <Col><h2 style={{textAlign:"center" , fontFamily: 'Lalezar',
              fontSize:"4.5rem",paddingBottom:"0%"}}> 7  </h2></Col> 
          
          
          </Row>
           

            
        </Container>
    </Col>
    

    <Col>
        <Container style={{backgroundColor: '#448AE5',color:"white",
          borderRadius: "10px",
          borderStyle:"solid",
          borderColor: "#15509D",
          marginTop:"10%",
          padding:"10%",}}>

              <Row>
              <h1 style={{textAlign:"center" , fontFamily: 'Lalezar',
              fontSize:"2rem",paddingBottom:"9%"}}> عدد طلبات  </h1>
                      
              </Row>

          <Row> <Col><img src={logo2} style={{width:"60%"}}></img></Col> 

          <Col><h2 style={{textAlign:"center" , fontFamily: 'Lalezar',
              fontSize:"4.5rem",paddingBottom:"0%"}}> 7  </h2></Col> 
          
          
          </Row>
           

            
        </Container>
    </Col>

    <Col>
        <Container style={{backgroundColor: '#448AE5',color:"white",
          borderRadius: "10px",
          borderStyle:"solid",
          borderColor: "#15509D",
          marginTop:"10%",
          padding:"10%",}}>

              <Row>
              <h1 style={{textAlign:"center" , fontFamily: 'Lalezar',
              fontSize:"2rem",paddingBottom:"9%"}}> عدد الاصناف </h1>
                      
              </Row>

          <Row> <Col><img src={logo3} style={{width:"60%"}}></img></Col> 

          <Col><h2 style={{textAlign:"center" , fontFamily: 'Lalezar',
              fontSize:"4.5rem",paddingBottom:"0%"}}> 7  </h2></Col> 
          
          
          </Row>
           

            
        </Container>
    </Col>

</Row>




<hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>


<DepartmentBarChart></DepartmentBarChart>

<hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>

<DepartmentitemsChart></DepartmentitemsChart>

</Container>
      

  </>
   
  )
}

export default DepartmentMain