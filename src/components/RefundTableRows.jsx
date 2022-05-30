import { useState, useEffect } from "react";
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import AdminService from '../services/AdminService'

function RefundTableRows({ rowsData, deleteTableRows, handleChange }) {

    const [refunds, setrefunds] = useState([]);

    useEffect(() => {
      AdminService.getAllItems()
        .then((response) => {
          setrefunds(response.data);
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }, []);
  
    return rowsData.map((data, index) => {
      return (
        <tr key={index}>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTableRows(index)}
            >
              x
            </button>
          </td>
          <td>
            <input
              type="text"
              onChange={(e) => (data.notes = e.target.value)}
              name="notes"
              className="form-control"
            />
          </td>
  
          <td>
            <input
              type="text"
              onChange={(e) => (data.refund_value = e.target.value)}
              name="refund_value"
              className="form-control"
            />{" "}
          </td>
  
          <td>
            <input
              type="text"
              onChange={(e) => (data.status = e.target.value)}
              name="status"
              className="form-control"
            />{" "}
          </td>
  
          <td>
            <input
              type="number"
              onChange={(e) => (data.estimatedquantity = e.target.value)}
              name="estimatedquantity"
              className="form-control"
            />{" "}
          </td>
  
          <td>
            <input
              type="number"
              onChange={(e) => (data.refund_quantity = e.target.value)}
              name="quantity"
              className="form-control"
            />{" "}
          </td>
  
          <td>
            <input
              type="date"
              onChange={(e) => (data.date = e.target.value)}
              name="date"
              className="form-control"
            />{" "}
          </td>
  
          <td>
            <input
              type="text"
              onChange={(e) => (data.unit = e.target.value)}
              name="unit"
              className="form-control"
            />{" "}
          </td>
  
          <td>
            <input
              type="text"
              onChange={(e) => (data.name = e.target.value)}
              name="name"
              className="form-control"
            />{" "}
          </td>
          <td>
            <input type="number" name="id" className="form-control" />{" "}
          </td>
        </tr>
      );
    });
}

export default RefundTableRows