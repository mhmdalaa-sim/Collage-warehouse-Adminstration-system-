import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AddDeleteTableRowsTrans from "../GeneralWarehouse/AddDeleteTableRowsTrans";
import AdminService from "../../services/AdminService";

function NewTransaction() {
  const [notes, setNotes] = useState("طلب تحويل من امين مخزن كلية");
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Lalezar",
          fontSize: "4rem",
          paddingTop: "5%",
        }}
      >
        {" "}
        طلب تحويل اصناف جديد{" "}
      </h1>
      <Form>
        <Container
          style={{ fontFamily: "Lalezar", fontSize: "1rem", marginTop: "5%" }}
        >
          <Row className="justify-content-centre">
            <Col style={{ marginRight: "2%", textAlign: "center" }}>
              <Row>
                <Form.Label>
                  <h3>ملاحظات</h3>
                </Form.Label>{" "}
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </Form>

      <AddDeleteTableRowsTrans notes={notes}></AddDeleteTableRowsTrans>
    </>
  );
}

export default NewTransaction;
