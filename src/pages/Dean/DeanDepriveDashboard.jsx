import React from 'react'
import SearchPage from '../../components/SearchPage'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeanSideNav from './DeanSideNav'
import DeanDeprive from './DeanDeprive'
import { useEffect, useState } from "react";
import { MDBCol, MDBIcon } from "mdbreact";
function DeanDepriveDashboard({Req}) {
  const [searchTerm,setSearchTerm]=useState("")
  return (
    <>
   <DeanSideNav></DeanSideNav>
     <h1 style={{textAlign:"center", fontFamily: 'Lalezar',
   fontSize:"4rem",paddingTop:"3%"}}>طلبات الجرد </h1>
 
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
 
       {Req.filter((request)=>{

if(searchTerm ===""){

return request

}

else if(request.Dep.toLowerCase().includes(searchTerm.toLowerCase()) || request.date.includes(searchTerm.toLowerCase()) ){

return request
}
}).map((request)=>{
 
 
 return <DeanDeprive Key={request.id} item={request}></DeanDeprive>
 })}
 
 
 
 
 
     </>
  )
}

export default DeanDepriveDashboard