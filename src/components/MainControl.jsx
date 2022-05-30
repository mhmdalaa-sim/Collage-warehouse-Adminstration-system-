import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  MdAdminPanelSettings,
  MdOtherHouses,
  MdApartment,
  MdAccountBox
} from "react-icons/md";
function MainControl() {
  const headingStyle = {
    marginBottom: "3rem",
  };
  const bodyStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight:'270px'
  };

  return (
    <>
      <div style={bodyStyle}>
        <h1 style={headingStyle}>MainControl</h1>
        <div>
          <Link to="/AdminMain">
            <Button> <MdAdminPanelSettings size={25}/>  <p className="mb-0 text-capitalize"> Admin</p></Button>
          </Link>
          <Link to="/GeneralWarehouse">
            <Button> <MdOtherHouses size={25}/>  <p className="mb-0 text-capitalize"> General Warehouse</p></Button>
          </Link>
          <Link to="/DepartmentWarehouse">
            <Button> <MdApartment size={25}/>  <p className="mb-0 text-capitalize"> Department Warehouse</p></Button>
          </Link>
          <Link to="/Dean">
            <Button> <MdAccountBox size={25}/>  <p className="mb-0 text-capitalize"> Dean</p></Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainControl;
