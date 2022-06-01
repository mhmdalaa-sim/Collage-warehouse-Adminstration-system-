import React from 'react'
import {useState} from "react"
import DeanSideNav from './DeanSideNav'
import{Link} from "react-router-dom"
import logo1 from '../Assets/documents.png'
import logo2 from '../Assets/warehouse.png'
import logo3 from '../Assets/refund.png'
import { Container ,Row,Col,Card, } from 'react-bootstrap'
import DeanBarChart from './DeanBarChart'
import DeanPieChart from './DeanPieChart'
import Rankings from '../../data/Rankings'
import WarehouseRanking from './WarehouseRanking'
import Notification from '../../components/Notification'
import NotifyData from '../../data/NotifyData'


function DeanMain() {
  const [notify,setNotify]=useState(NotifyData)

 
  return (<>
   <Notification data={notify}></Notification>

    <DeanSideNav></DeanSideNav>
      
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
              fontSize:"2rem",paddingBottom:"9%"}}> عدد  المخازن </h1>
                      
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
              fontSize:"2rem",paddingBottom:"9%"}}>  عدد طلبات الأسترداد</h1>
                      
              </Row>

          <Row> <Col><img src={logo3} style={{width:"60%"}}></img></Col> 

          <Col><h2 style={{textAlign:"center" , fontFamily: 'Lalezar',
              fontSize:"4.5rem",paddingBottom:"0%"}}> 7  </h2></Col> 
          
          
          </Row>
           

            
        </Container>
    </Col>

</Row>




<hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>

<Container>

<h1 style={{textAlign:"center", fontFamily: 'Lalezar',
    fontSize:"4rem",paddingTop:"3%"}}> اهم الاحصائيات</h1>
  <Row>
    <Col>
    <DeanBarChart></DeanBarChart>
    </Col>
    
    <Col>
    <DeanPieChart></DeanPieChart>
    </Col>
  </Row>
</Container>




<hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>


 
</Container>
  </>
    
  )
}

export default DeanMain