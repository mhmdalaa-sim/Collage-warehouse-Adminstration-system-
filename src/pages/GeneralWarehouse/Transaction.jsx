import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Button,Form } from 'react-bootstrap'
import{Link} from "react-router-dom"
import AdminService from '../../services/AdminService'
function Transaction() {

    const [Trans,setTrans]= useState([])
    const [cond2,setCond2] = useState(true)

    useEffect(()=>{
    
      AdminService.getAllTransactions().then(response =>{
        setTrans(response.data);
        setCond2(false);

     })
     .catch(error =>{
        console.log('something went wrong',error);
    })

    },[])

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
    
    
    if(cond2) return <h1>PLEASE WAIT...</h1>
    else 
  return (
    <> 
{console.log(Trans)}
   {Trans.length>0?Trans.map(trans=>(
     
  <Container style={style}>

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
      <Link to={`/GenerlWarehouseTransaction/${trans.action_id}`}><Button type="submit" style={{float:'left',backgroundColor:"whitesmoke", borderRadius: "10px",
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
          <h6>{trans.action_date}   </h6>
      </Row>
      <Row>
      <h3>   ملاحظات</h3>
      </Row>

      <Row >
          <h6>{trans.action_notes}   </h6>
      </Row>
  </Col>




  <Col>
      <Row>
      <h3>  حاله الطلب</h3>
      </Row>
  </Col>




  <Col >
      <Row >
          <h3>  المستخدمين</h3>
      </Row>

      
  </Col>
  <Col >
      <Row >
          <h3>  المخزن</h3>
      </Row>
      <Row >
          <h3>
            
          
           </h3>
      </Row>
      
  </Col>
  
  </Row>

</Container>
)): <h1 style=
{{textAlign:"center" ,marginTop:"3%", fontFamily: 'Lalezar',
fontSize:"4rem"}}>لا توجد تحويلات متاحة</h1>

}
  </>
  )
}

export default Transaction