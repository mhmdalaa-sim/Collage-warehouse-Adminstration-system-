import React from 'react'
import GeneralSideNav from './GeneralSideNav'
import GitemRow from './GitemRow'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import {useParams} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { MDBCol, MDBIcon } from "mdbreact";
import { useState } from 'react';
function GwarehouseItems({aylist}) {
    
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
    fontSize:"3rem",

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
    <GeneralSideNav></GeneralSideNav>
 
     <h1 style={{textAlign:"center", paddingTop:"5%", fontFamily: 'Lalezar',
         fontSize:"4rem"}}> اصناف المخزن    </h1>
     <Container> 
         <Row>
 
         <Col style={{float:"right", marginTop:"6%"}}>
    
         <MDBCol md="12">
       <form className="form-inline mt-4 mb-4 w-100 mx-auto">
         <div className=" w-100">
           <MDBIcon icon="search" className=" mr-2" />
           <input
             className="form-control form-control-sm "
             type="text" placeholder='search ...'
 
             onChange={event=>{setSearchTerm(event.target.value)}}
           />
 
 <Table striped bordered hover size="lg" style={tablestyle} >
       <thead>
       <tr class=" d-flex flex-row-reverse  ">
         <th class="p-2 col px-1 ">رقم الصنف</th>
         <th class="p-2 col px-1">اسم الصنف</th>
         <th class="p-2 col px-1"> التاريخ</th>
        
       </tr>
       </thead>
 
       {aylist.filter((val)=>{
       if(searchTerm ===""){
 
         return val
 
       }
 
       else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase()) ){
 
         return val
       }
 
     }).map((val,key)=>{
 
       return <>
 
       <tbody>
 
       <GitemRow Key={val.id} item={val}></GitemRow>
 
       </tbody>
 
       </>
 
     })}
       </Table>
 
         </div>
       </form>
     </MDBCol>
        
         </Col>
 
         </Row>
         </Container>
 
         
         
     </>
  )
}

export default GwarehouseItems