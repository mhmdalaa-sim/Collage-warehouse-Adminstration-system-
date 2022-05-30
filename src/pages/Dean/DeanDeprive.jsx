import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import{Link} from "react-router-dom"
function DeanDeprive({item}) {

    const style={
        backgroundColor:"#448AE5",
        color:"white",
        borderRadius: "10px",
        marginTop:"5%",
        padding:"1%",
        fontFamily: 'Lalezar',
    fontSize:"4rem",paddingRight:"3%",
    borderRadius: "10px",
    borderStyle:"solid",
    borderColor: "#15509D"

    }
    const acceptedTable = {
        color: "white",
        borderRadius: "10px",
        marginTop: "5%",
        padding: "1%",
        fontFamily: "Lalezar",
        fontSize: "4rem",
        paddingRight: "3%",
        borderRadius: "10px",
        borderStyle: "solid",
        borderColor: "black",
        backgroundColor: "green",
      };
      const rejectedTable = {
        color: "white",
        borderRadius: "10px",
        marginTop: "5%",
        padding: "1%",
        fontFamily: "Lalezar",
        fontSize: "4rem",
        paddingRight: "3%",
        borderRadius: "10px",
        borderStyle: "solid",
        borderColor: "#15509D",
        borderColor: "black",
        backgroundColor:'#f5c607'
      };
  return (
   <> 
      <Container style={item.Accepted ? acceptedTable : rejectedTable}>
    <Row>
    
    <Col >
          <Row >
              <h3> </h3>
          </Row>
          <Row >
              <h6>   </h6>
          </Row>
          <Row >
              <h6>   </h6>
          </Row>
          <Row >
              <h6>   </h6>
          </Row>

          <Row >
          <Link to={`/DeanDepriveTable/${item.id}`}><Button type="submit" style={{float:'left',backgroundColor:"whitesmoke", borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D"
        }}>اظهار تفاصيل الطلب</Button></Link>
          </Row>

          <Row >
              <h6>   </h6>
          </Row>
          
      </Col>

    <Col>
          <Row>
          <h3>   التاريخ</h3>
          </Row>

          <Row >
              <h6>{item.date}   </h6>
          </Row>

          <Row >
          <h6>   </h6>
          </Row>

          <Row >
          <h6>   </h6>
          </Row>

          <Row >
          <h6>   </h6>
          </Row>
      </Col>
    
    
    

      <Col>
          <Row>
          <h3>  حاله الطلب</h3>
          </Row>

          <Row >
              <h6>   {item.Status1}</h6>
          </Row>

          <Row >
          <h6>   {item.Status2}</h6>
          </Row>

          <Row >
          <h6>   {item.Status3}</h6>
          </Row>

          <Row >
          <h6>   {item.Status4}</h6>
          </Row>
      </Col>




      <Col >
          <Row >
              <h3>  المستخدمين</h3>
          </Row>
          <Row >
              <h6>   {item.User1}</h6>
          </Row>

          <Row >
          <h6>   {item.User2}</h6>
          </Row>

          <Row >
          <h6>   {item.User3}</h6>
          </Row>

          <Row >
          <h6>   {item.User4}</h6>
          </Row>
          
      </Col>
    
    
    
     <Col >
          <Row >
              <h3>الطلب رقم {item.id}</h3>
          </Row>
          <Row >
              <h6>  مخزن قسم {item.Dep}</h6>
          </Row>

          <Row >
              <h6>   عضو القسم {item.DepManger}</h6>
          </Row>

          <Row >
              <h6>   التاريخ  {item.date}</h6>
          </Row>
          
      </Col>


      
      </Row>
     
    </Container>
      </>
  )
}

export default DeanDeprive