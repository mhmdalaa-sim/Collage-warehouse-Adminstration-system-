import React from 'react'
import { Navbar ,Container,NavbarBrand,NavLink,Nav ,NavDropdown ,DropdownButton,Dropdown, NavItem} from 'react-bootstrap'
import logo from "../pages/Assets/bell-solid.svg"
import { Link } from "react-router-dom";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu,
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
  } from "cdbreact";
import { Button } from 'bootstrap';


function Notification({data}) {
  return (
    <>
   <Nav className="justify-content-end" activeKey="/home">
   
    <CDBSidebarMenuItem icon="fa-regular fa-bell" size="20x">
   
                <NavDropdown
                  title="الاشعارات"
                  id="nav-dropdown">
                     {data.map((item,key)=>{
                  return <>
                  <NavDropdown.Item
                    eventKey="4.1"
                  > {item.content}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
       </>
    })}
                  
                </NavDropdown>
              </CDBSidebarMenuItem>
  </Nav>

    </>
  )
}

export default Notification