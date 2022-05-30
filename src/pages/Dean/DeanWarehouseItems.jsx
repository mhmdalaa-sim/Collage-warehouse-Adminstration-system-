import React from 'react'
import {useParams} from "react-router-dom"
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import TransferItem from './TransferItem'
import DeanSideNav from './DeanSideNav'
import Table from 'react-bootstrap/Table'
import{Link} from "react-router-dom"
import { MDBCol, MDBIcon } from "mdbreact";
import { useState } from 'react';
function DeanWarehouseItems({aylist}) {
    const prams = useParams()
    const [searchTerm,setSearchTerm]=useState("")
    const rowstyle={

      marginTop:"5%"
    }

    const textstyle={

      fontFamily: 'Lalezar',
      fontSize:"2rem"
    }

    const tablestyle={

      float:"centre",
      width:"80%",
      marginLeft:"15%",
      marginTop:"5%",
      fontFamily: 'Lalezar',
  fontSize:"5rem"

  }

  const style={
      
      color:"black",
      borderRadius: "10px",
    
      padding:"1%",
      
      fontFamily: 'Lalezar',
      fontSize:"3rem"
  }

  return (
    <>
    <DeanSideNav></DeanSideNav>
    <h1 style={{textAlign:"center", paddingTop:"5%", fontFamily: 'Lalezar',
        fontSize:"4rem"}}>{prams.id} اصناف المخزن رقم   </h1>
   <MDBCol md="12">

<form className="form-inline mt-4 mb-4 w-100 mx-auto">
        <div className=" w-100">
          <MDBIcon icon="search" className=" mr-2" />
          <input
            className="form-control form-control-sm "
            type="text" placeholder='search ...'

            onChange={event=>{setSearchTerm(event.target.value)}}
          /></div>
</form>
</MDBCol>


        <Table striped bordered hover size="lg" style={tablestyle} >
<thead>
<tr class=" d-flex flex-row-reverse  ">
  <th class="p-2 col px-1 ">رقم الصنف</th>
  <th class="p-2 col px-1">اسم الصنف</th>
  <th class="p-2 col px-1"> التاريخ</th>
  <th class="p-2 col px-1"> </th>
  
  
</tr>
</thead>

<tbody>

{aylist.filter((val)=>{
      if(searchTerm ===""){

        return val

      }

      else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase()) || val.date.includes(searchTerm.toLowerCase()) ){

        return val
      }

    }).map((item)=>{

return <TransferItem
 Key={item.id} item={item}></TransferItem>
})}
</tbody>

</Table>



<hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>


<Container fluid="md">
  <Row style={rowstyle}>
    
    <Col style={{textAlign:'center'}}>
    <Row fluid>
 
    <Col> <Form.Label ><h3 style={textstyle}> : تاريخ الانشاء  </h3></Form.Label>
  

    </Col>

    <Col> <Form.Label ><h3 style={textstyle}> : رئيس المخزن </h3></Form.Label>
    
    </Col>

    <Col> <Form.Label ><h3 style={textstyle}> : موقع المخزن </h3></Form.Label>
    <h2></h2>

    </Col>
   
    </Row>



    <Row fluid>
 
    <Col> <Form.Label ><h3 style={textstyle}> : القسم التابع له المخزن </h3></Form.Label>
  

    </Col>

    <Col> <Form.Label ><h3 style={textstyle}> : حاله المخزن </h3></Form.Label>
    
    </Col>

    <Col> <Form.Label ><h3 style={textstyle}> : اسم المخزن</h3></Form.Label>
    <h2></h2>

    </Col>
   
    </Row>
    
  </Col>
  </Row>
  <Row style={rowstyle}>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label><h3 style={textstyle}>الوصف</h3></Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Row>

  <hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px",color:"black"}}></hr>

 
  <Row style={rowstyle}>
  <Col style={{textAlign:'center'}}> 
    <h1 style={textstyle}>
        رؤساء سابقين للمخزن
    </h1>  


  
  </Col>
  


  </Row>

  <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>

 <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>
  

 <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>


</Container>
    </>
  )
}

export default DeanWarehouseItems