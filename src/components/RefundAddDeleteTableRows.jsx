import React from 'react'
import RefundTableRows from './RefundTableRows'
import { Container,Row,Col,Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useParams, useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";
import { useState } from "react";
function RefundAddDeleteTableRows() {

  const tablestyle = {
    float: "centre",
    width: "95%",
    margin: "5% auto",
    fontFamily: "Lalezar",
    fontSize: "3rem",
  };

  const [notes, setNotes] = useState("استرجاع جديد");
  const [list, setRowsData] = useState([]);

  const navigate = useNavigate();

  const saveRequest = (e) => {
    e.preventDefault();
    console.log(list);
    console.log(list[0].item);
    const input = { list, notes };
    AdminService.makeRequest(input)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const addTableRows = () => {
    const rowsInput = {
      notes: "",
      value: "",
      status: "",
      estimatedquantity: "",
      quantity: "",
      date: "",
      unit: "",
      name: "",
      id: "",
    };
    setRowsData([...list, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...list];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  return (
    <>
      <Table striped bordered hover size="lg" style={tablestyle}>
        <thead>
          <tr class="   ">
            <th>
              <button
                className="btn btn-outline-success"
                onClick={addTableRows}
              >
                +
              </button>
            </th>

            <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
              {" "}
              الملاحظات
            </th>
            <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
              {" "}
              القيمة المقدرة
            </th>
            <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
              حالة الصنف
            </th>
            <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
              الكمية المقدرة{" "}
            </th>
            <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
              الكمية{" "}
            </th>
            <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
              {" "}
              تاريخ الإدخال{" "}
            </th>
            <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
              الوحدة
            </th>
            <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
              إسم الصنف
            </th>
            <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
              رقم التحويل
            </th>
          </tr>
        </thead>

        <tbody>
          <RefundTableRows rowsData={list} deleteTableRows={deleteTableRows} />
        </tbody>
      </Table>
    </>
  );
}

export default RefundAddDeleteTableRows