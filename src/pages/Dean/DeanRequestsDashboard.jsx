import React from 'react'
import SearchPage from '../../components/SearchPage'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeanSideNav from './DeanSideNav'
import DeanRequest from './DeanRequest'
function DeanRequestsDashboard({Req}) {
  return (
    <>
  <DeanSideNav></DeanSideNav>
    <h1 style={{textAlign:"center", fontFamily: 'Lalezar',
  fontSize:"4rem",paddingTop:"3%"}}>طلبات الصرف </h1>

<DeanRequest></DeanRequest>
    </>
  )
}

export default DeanRequestsDashboard