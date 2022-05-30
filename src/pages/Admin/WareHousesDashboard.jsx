import React from "react";
import WareHouse from "../../components/WareHouse";
import AdminSideNav from "./AdminSideNav";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import SearchPage from "../../components/SearchPage";
import { useEffect, useState } from "react";
import AdminService from "../../services/AdminService";

const WareHousesDashboard = () => {
  const [warehouses, setWarehouses] = useState([]);
  useEffect(() => {
    AdminService.getAllWarehouses()
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []);
  return (
    <>
      <AdminSideNav></AdminSideNav>

      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "Lalezar",
          fontSize: "4rem",
        }}
      >
        المخازن المتاحه
      </h1>

      <Container >
        <Row>
          <Col class="col-md-12" style={{ float: "right", marginTop: "6%", marginLeft: "30%" }}>
            <SearchPage></SearchPage>
          </Col>
        </Row>
      </Container>

      {warehouses.length > 0 ? (
        warehouses.map((warehouse) => {
          return (
            <WareHouse
              key={warehouse.warehouse_id}
              warehouse={warehouse}
            ></WareHouse>
          );
        })
      ) : (
        <h1
          style={{
            textAlign: "center",
            marginTop: "3%",
            fontFamily: "Lalezar",
            fontSize: "4rem",
          }}
        >
          لا توجد مخازن متاحة
        </h1>
      )}
    </>
  );
};

export default WareHousesDashboard;
