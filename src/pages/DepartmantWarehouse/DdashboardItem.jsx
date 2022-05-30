import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import{Link} from "react-router-dom"
function DdashboardItem({item}) {

    const style={
        backgroundColor:"#448AE5",
        color:"white",
        borderRadius: "10px",
        marginTop:"5%",
        padding:"1%",
        fontFamily: 'Lalezar',
        fontSize:"2rem",
        borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D"

    }
  return (
    <>


    <Container style={style}>
      <Row className="justify-content-end">
        <Col sm m lg="auto">
          <h5>{item.id}طلب لاسترداد رقم</h5>
        </Col>
        
      </Row>
      <Row className="justify-content-end">
      <Col sm m lg="9">
    
      
      <Link to={`/RefundTable/${item.id}`}><Button type="submit" style={{float:'left',backgroundColor:"whitesmoke", borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D"
        }}>اظهار تفاصيل الطلب</Button></Link>
        
        </Col>
        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 >{item.owner}:اسم رئيس لجنه الفحص</h5>
        </Col>
       
        <Row className="justify-content-end">
        <Col sm m lg="auto">
          <h5>{item.date}:التاريخ</h5>
        </Col>
        
      </Row>
      </Row>
      
    </Container>
        </>
  )
}

export default DdashboardItem