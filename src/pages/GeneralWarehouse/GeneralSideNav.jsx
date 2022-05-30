import React from 'react'
import { Navbar ,Container,NavbarBrand,NavLink,Nav ,NavDropdown} from 'react-bootstrap'
import logo from '../Assets/Group 18.svg'
import logo8 from '../Assets/alexendria.png'
import "./sideNav.css";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu
  } from "react-pro-sidebar";
  import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
    CDBBadge,
    CDBContainer,
  } from 'cdbreact';
  import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
  } from "react-icons/fi";
  import{Link} from "react-router-dom"
  import {useState} from "react"
function GeneralSideNav() {

    const navstyle={
        color:"white",fontFamily: 'Lalezar',
        fontSize:"1.0rem",
                        } 
    const [menuCollapse, setMenuCollapse] = useState(false);
    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
      //condition checking to change state from true to false and vice versa
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
  return (
    <>
    <div style={{position: "fixed",
         width:" 0%",
         height: "100%",
         left: "0",
         top: 0,
         zIndex:"100"
         
        }}>
     
   <CDBSidebar textColor="white" backgroundColor=" rgb(68, 138, 229)" maxWidth="250px">
     <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>

     <Navbar.Brand as={Link} to="/GeneralWarehouse"> <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
         <img
           src={logo8}
           alt=""
           style={{ width: '150px' }}
         />
   
       </div></Navbar.Brand>
      
     </CDBSidebarHeader>

  
     <CDBSidebarContent>
       <CDBSidebarMenu>
         <CDBSidebarMenuItem as={Link} to="/General/WareHousesItems" icon="fa-solid fa-warehouse"> <Nav.Link style={navstyle}  as={Link} to="/General/WareHousesItems" >  الاصناف الموجوده</Nav.Link></CDBSidebarMenuItem>
         <CDBSidebarMenuItem icon="fa-regular fa-copy" as={Link} to="/General/Requests"  iconType="solid">
         <Nav.Link  style={navstyle} as={Link} to="/General/Requests" >  استمارات الصرف </Nav.Link>
         </CDBSidebarMenuItem>
      
         <CDBSidebarMenuItem  as={Link} to="/General/refundsDashboard" icon="fa-regular fa-window-restore">
         <Nav.Link  style={navstyle} as={Link} to="/General/refundsDashboard" >   طلبات الأسترداد</Nav.Link>
         </CDBSidebarMenuItem>

         <CDBSidebarMenuItem  as={Link} to="/General/transactions/" icon="fa-regular fa-window-restore">
         <Nav.Link  style={navstyle} as={Link} to="/General/transactions/" >    التحويلات </Nav.Link>
         </CDBSidebarMenuItem>


         <CDBSidebarMenuItem as={Link} to="/General/additems" icon="fa-solid fa-cash-register">
         <Nav.Link  style={navstyle} as={Link} to="/General/additems" >    تسجيل الاصناف </Nav.Link>
         </CDBSidebarMenuItem>


       </CDBSidebarMenu>
       
      

       <CDBSidebarFooter style={{ textAlign: 'left' }}>
       <div
         className="sidebar-btn-wrapper"
         style={{padding: '20px 5px'}}
       >

     <CDBSidebarMenuItem className="text-white" as={Link} to="/"  icon="fa-solid fa-arrow-left" ><Nav.Link  style={navstyle} as={Link} to="/" >  تسجيل خروج</Nav.Link></CDBSidebarMenuItem>
         
       </div>
     </CDBSidebarFooter>

       

     </CDBSidebarContent>
   </CDBSidebar>
   </div>
   
   
   </>
  )
}

export default GeneralSideNav