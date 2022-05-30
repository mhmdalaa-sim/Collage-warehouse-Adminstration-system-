import React from 'react'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import DeanSideNav from './DeanSideNav'
import DeanWarehouse from './DeanWarehouse'
import { useEffect, useState } from "react";
import { MDBCol, MDBIcon } from "mdbreact";
function DeanWarehouses({WH}) {
  const [searchTerm,setSearchTerm]=useState("")
  return (
    <>
     <DeanSideNav></DeanSideNav>

      <h1 style={{textAlign:"center",marginTop:"5%",   fontFamily: 'Lalezar',
    fontSize:"4rem"}}>المخازن المتاحه</h1>

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

       {WH.filter((wh)=>{

if(searchTerm ===""){

return wh

}

else if(wh.Dep.toLowerCase().includes(searchTerm.toLowerCase()) || wh.date.includes(searchTerm.toLowerCase()) ){

return wh
}
}).map((wh)=>{


        return <DeanWarehouse key={wh.id} item={wh}></DeanWarehouse>
       })}
    </>
  )
}

export default DeanWarehouses