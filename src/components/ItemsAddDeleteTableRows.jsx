import React from "react";
import ItemsTableRows from "./ItemsTableRows";
import { Container, Row, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminService from '../services/AdminService'

function ItemsAddDeleteTableRows({ exmem, ec }) {

  
  const [notes, setNotes] = useState(" اصناف جديده");
  const [list, setRowsData] = useState([]);
  const [ex_type, setex_type] = useState("فحص اصناف جديدة");

  const navigate = useNavigate();
  const saveNewStock = (e) => {
    e.preventDefault();
    console.log(list);
    console.log("here");

    const input = { ex_type, notes, ec, list, exmem };
    AdminService.AddNewStock(input)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const tablestyle = {
    float: "centre",
    width: "95%",
    margin: "auto",
    fontFamily: "Lalezar",
    fontSize: "3rem",
  };

  const addTableRows = () => {
    const rowsInput = {
      stock: {
        item: {},
        entry_date: "",
        expired_date: "",
        price: 0,
        quantity: 0,
        status: "مقبول",
      },
      is_accepted: 'false',
      notes: "",
      percentage_examined: "",
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
          ملاحظات{" "}
        </th>
        <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
          {" "}
          مقبول/مرفوض
        </th>
        <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
          نسبة الفحص{" "}
        </th>
        <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
          تاريخ الانتهاء{" "}
        </th>
        <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
          {" "}
          الكمية{" "}
        </th>
        <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
          السعر
        </th>
        <th class="" style={{ textAlign: "center", fontSize: "30px" }}>
          اسم الصنف
        </th>
      </tr>
    </thead>

    <tbody>
      <ItemsTableRows rowsData={list} deleteTableRows={deleteTableRows} />
    </tbody>
  </Table>
  <Button
    type="submit"
    style={{ width: "10%", float: "right", textAlign: "right" }}
    onClick={(e) => saveNewStock(e)}
  >
    تاكيد
  </Button>
</>
)


}

export default ItemsAddDeleteTableRows