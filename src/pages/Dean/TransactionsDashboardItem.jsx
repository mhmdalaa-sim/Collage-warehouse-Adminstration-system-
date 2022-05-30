import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import{Link} from "react-router-dom"
function TransactionsDashboardItem({item}) {

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
      <Row className="justify-content-start" >
        <Col>

        </Col>
        <Col>
            <h3> الكميه : {item.quantity}</h3>
        </Col>
        <Col>
            <h3>  الي مخزن : {item.to} </h3>
        </Col>

        <Col>
            <h3>   من مخزن : {item.from} </h3>
        </Col>

      </Row>


      <Row className="justify-content-start" style={{marginTop:"3%"}}>
        <Col>

        </Col>
        <Col>
            <h3>  الوحده : {item.unit}</h3>
        </Col>
        <Col>
            <h3>   الفئه : {item.category} </h3>
        </Col>

        <Col>
            <h3>   اسم الصنف  : {item.name} </h3>
        </Col>

      </Row>



      
      <Row className="justify-content-start" style={{marginTop:"3%"}}>
        <Col>

        </Col>
        <Col>
            <h3>  تاريخ الاقصاء : {item.exitdate}</h3>
        </Col>
        <Col>
            <h3>   تاريخ الدخول : {item.entrydate} </h3>
        </Col>

        <Col>
            <h3>    السعر :  {item.price} </h3>
        </Col>

      </Row>
        
    
      
    </Container>
    </>
  )
}

export default TransactionsDashboardItem