import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  checkbox,
} from "react-bootstrap";
import AdminService from '../services/AdminService'




function ItemsTableRows({ rowsData, deleteTableRows }) {

    const style = {
        textAlign: "right",
      };
      const [items, setItems] = useState([]);
    
      useEffect(() => {
        AdminService.getAllItems()
          .then((response) => {
            setItems(response.data);
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
                className="form-control"
                style={style}
              />
            </td>
    
            <td style={{ alignContent: "center", textAlign: "center" }}>
              <Form.Check
                name="shortage"
                onChange={(e) => {
                  if (e.target.value) data.is_accepted = 'true';
                  else data.is_accepted = 'false';
                }} // className="form-control"
                style={{
                  width: "200px",
                  display: "inline",
                  justifyContent: "space-evenly",
                  //   marginLeft: "30px",
                  fontSize: "30px",
                }}
              />
            </td>
    
            <td>
              <input
                type="number"
                onChange={(e) => (data.percentage_examined = e.target.value)}
                name="quantity"
                className="form-control"
                style={style}
              />
            </td>
    
            <td>
              <input
                type="date"
                onChange={(e) => (data.stock.expired_date = e.target.value)}
                name="item_value"
                className="form-control"
                style={style}
              />
            </td>
    
            <td>
              <input
                type="text"
                onChange={(e) => (data.stock.quantity = e.target.value)}
                name="unit"
                className="form-control"
                style={style}
              />
            </td>
    
            <td>
              <input
                type="text"
                onChange={(e) => (data.stock.price = e.target.value)}
                name="name"
                className="form-control"
                style={style}
              />
            </td>
    
            <td>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  data.stock.item = items.find(
                    (it) => it.item_id == e.target.value
                  );
                }}
              >
                <option>Please Select</option>
                {items.length > 0 ? (
                  items.map((i) => (
                    <option key={i.item_id} value={i.item_id}>
                      {i.item_name}
                    </option>
                  ))
                ) : (
                  <option>لايوجد اصناف</option>
                )}
              </Form.Select>
            </td>
          </tr>
        );
      });
}

export default ItemsTableRows 


