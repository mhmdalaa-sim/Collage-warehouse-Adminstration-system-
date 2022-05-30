import React from "react";
import SearchPage from "../../components/SearchPage";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import DepartmentSideNav from "./DepartmentSideNav";
import DdashboardItem from "./DdashboardItem";
import { useEffect, useState } from "react";
import AdminService from "../../services/AdminService";
import { MDBCol, MDBIcon } from "mdbreact";
import GeneralSideNav from "../GeneralWarehouse/GeneralSideNav"
function DrefundDashboard({display}) {
  const [Refund, setRefund] = useState([]);
  const [searchTerm,setSearchTerm]=useState("")
  useEffect(() => {
    AdminService.getAllRefunds().then((response) => {
      setRefund(response.data);
    });
  }, []);
  return (
    <>
    
      <DepartmentSideNav></DepartmentSideNav>
     
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Lalezar",
          fontSize: "4rem",
          paddingTop: "3%",
        }}
      >
        طلبات الاسترداد
      </h1>

      <MDBCol md="12">

    <form className="form-inline mt-4 mb-4 w-100 mx-auto">
            <div className=" w-100">
              <MDBIcon icon="search" className=" mr-2" />
              <input
                className="form-control form-control-sm "
                type="text" placeholder='search ...'

                onChange={event=>{setSearchTerm(event.target.value)}}
              /></div>
    </form>
    </MDBCol>

      {Refund.filter((refund)=>{
      if(searchTerm ===""){

        return refund

      }

      else if(refund.action_notes.toLowerCase().includes(searchTerm.toLowerCase()) || refund.action_date.includes(searchTerm.toLowerCase()) ){

        return refund
      }

    }).map((refund) => {
        return <DdashboardItem Key={refund.id} item={refund}></DdashboardItem>;
      })}

      <Link to="/NewRefundTable">
        <Button
          type="submit"
          style={{
            marginLeft: "10%",
            fontFamily: "Lalezar",
            fontSize: "2rem",
            marginTop: "5%",
            borderRadius: "10px",
            display: `${display}`
          }}
        >
          عمل طلب ارجاع جديد
        </Button>
      </Link>
    </>
  );
}

export default DrefundDashboard;
