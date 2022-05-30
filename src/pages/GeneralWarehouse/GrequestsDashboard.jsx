import React from 'react'
import GeneralSideNav from './GeneralSideNav'
import SearchPage from '../../components/SearchPage'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MDBCol, MDBIcon } from "mdbreact";
import Request from '../../components/Request'
function GrequestsDashboard({display}) {
  return (
      <>
      <GeneralSideNav></GeneralSideNav>
      <h1 style={{textAlign:"center", fontFamily: 'Lalezar',
    fontSize:"4rem",paddingTop:"3%"}}>استمارات الصرف </h1>

<Container> 
        
<Request></Request>

        </Container>


    <Link to="/NewRequestTable"><Button type="submit" style={{
  marginLeft:"10%",fontFamily: 'Lalezar',
      fontSize:"2rem" ,marginTop:"5%",borderRadius: "10px" , display: `${display}`
}}>عمل استماره جديده</Button></Link>

{console.log(display)}




      </>

  )
}

export default GrequestsDashboard