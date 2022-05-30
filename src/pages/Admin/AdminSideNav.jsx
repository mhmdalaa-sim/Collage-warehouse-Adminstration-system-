import React from "react";
import "./Navstyle.css";
import "./sideNav.css";

import {
  Navbar,
  Container,
  NavbarBrand,
  NavLink,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import logo from "../Assets/Group 18.svg";
import logo8 from "../Assets/alexendria.png";
import logo1 from "../Assets/add (1).png";
import logo2 from "../Assets/warehouse.png";
import logo3 from "../Assets/add.png";
import logo5 from "../Assets/deletedlogo.png";
import logo6 from "../Assets/userlogo.png";
//import react pro sidebar components
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
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
function AdminSideNav() {
  const navstyle = {
    color: "white",
    fontFamily: "Lalezar",
    fontSize: "1.0rem",
    textAlign: "center",
  };
  const navTitleStyle = {
    color: "white",
    fontFamily: "Lalezar",
    fontSize: "1.0rem",
    textAlign: "center",
  };
  const navItemstyle = {
    color: "black",
    fontFamily: "Lalezar",
    fontSize: "1.0rem",
    textAlign: "center",
    textAlign: "center",
  };
  const [menuCollapse, setMenuCollapse] = useState(false);
  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: " 0%",
          height: "100%",
          left: "0",
          top: 0,
          zIndex: "100",
        }}
      >
        <CDBSidebar
          textColor="white"
          backgroundColor=" rgb(68, 138, 229)"
          maxWidth="250px"
        >
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <Navbar.Brand as={Link} to="/AdminMain">
              {" "}
              <div
                className="container"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img src={logo8} alt="" style={{ width: "150px" }} />
              </div>
            </Navbar.Brand>
          </CDBSidebarHeader>

          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="fa-light fa-users">
                {" "}
                <Nav.Link style={navstyle} as={Link} to="/UsersList">
                  {" "}
                  المستخدمين
                </Nav.Link>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="chart-line" iconType="solid">
                <Nav.Link
                  icon="fa-solid fa-warehouse"
                  style={navstyle}
                  as={Link}
                  to="/WareHouses"
                >
                  {" "}
                  المخازن{" "}
                </Nav.Link>
              </CDBSidebarMenuItem>

              <CDBSidebarMenuItem icon="fa-light fa-plus">
                <NavDropdown
                  title="اضافه"
                  style={navTitleStyle}
                  id="nav-dropdown"
                >
                  <NavDropdown.Item
                    style={navItemstyle}
                    as={Link}
                    to="/itemslist"
                    eventKey="4.1"
                  >
                    صنف
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    style={navItemstyle}
                    as={Link}
                    to="/NewUser"
                    eventKey="4.2"
                  >
                    مستخدم
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    style={navItemstyle}
                    as={Link}
                    to="/Admin/NewWarehouse"
                    eventKey="4.3"
                  >
                    مخزن
                  </NavDropdown.Item>
                </NavDropdown>
              </CDBSidebarMenuItem>


              <CDBSidebarMenuItem icon="fa-light fa-trash">
                <NavDropdown
                  title="قائمه المحزوفات"
                  style={navTitleStyle}
                  id="nav-dropdown"
                >
                  <NavDropdown.Item
                    style={navItemstyle}
                    as={Link}
                    to="/DeletedItems"
                    eventKey="4.1"
                  >
                    صنف
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    style={navItemstyle}
                    as={Link}
                    to="/DeletedUsersList"
                    eventKey="4.2"
                  >
                    مستخدم
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    style={navItemstyle}
                    as={Link}
                    to="/DeletedWareHouses"
                    eventKey="4.3"
                  >
                    مخزن
                  </NavDropdown.Item>
                </NavDropdown>
              </CDBSidebarMenuItem>

              

            </CDBSidebarMenu>

            <CDBSidebarFooter style={{ textAlign: "left" }}>
              <div
                className="sidebar-btn-wrapper"
                style={{ padding: "20px 5px" }}
              >
                <CDBSidebarMenuItem icon="fa-solid fa-arrow-left">
                  <Nav.Link style={navstyle} as={Link} to="/">
                    {" "}
                    تسجيل خروج
                  </Nav.Link>
                </CDBSidebarMenuItem>
              </div>
            </CDBSidebarFooter>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </>
  );
}

export default AdminSideNav;
