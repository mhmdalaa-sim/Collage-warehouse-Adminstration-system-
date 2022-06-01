import React from 'react'
import { Container ,Row,Col,Card, } from 'react-bootstrap'
import AdminSideNav from './AdminSideNav'
import Logo1 from "../Assets/Union 1.svg"
import Logo2 from "../Assets/warehouse.png"
import Logo3 from "../Assets/add (1).png"
import LineChart from '../../components/LineChart'
import RankingTable from './RankingTable'
import Notification from '../../components/Notification'
import NotifyData from '../../data/NotifyData'
import {useState} from "react"

function AdminMain() {
    const [notify,setNotify]=useState(NotifyData)
  return (
  <>

    <Notification data={notify}></Notification>
    
     <AdminSideNav ></AdminSideNav>


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
                        fontSize:"2rem",paddingBottom:"9%"}}> عدد المستخدمين </h1>
                                
                        </Row>

                    <Row> <Col><img src={Logo1} style={{width:"60%"}}></img></Col> 

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
                        fontSize:"2rem",paddingBottom:"9%"}}> عدد المخازن </h1>
                                
                        </Row>

                    <Row> <Col><img src={Logo2} style={{width:"60%"}}></img></Col> 

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

                    <Row> <Col><img src={Logo3} style={{width:"60%"}}></img></Col> 

                    <Col><h2 style={{textAlign:"center" , fontFamily: 'Lalezar',
                        fontSize:"4.5rem",paddingBottom:"0%"}}> 7  </h2></Col> 
                    
                    
                    </Row>
                     

                      
                  </Container>
              </Col>

          </Row>



          <hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>

          <LineChart></LineChart>


          <hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>


          <h1 style={{textAlign:"center",marginTop:"5%",   fontFamily: 'Lalezar',
    fontSize:"4rem"}}> اكتر المستخدمين نشاطا </h1>

          <RankingTable></RankingTable>

          
      </Container>

 






  </>
  )
}

export default AdminMain