import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminService from "../../services/AdminService";
import { useEffect, useState } from "react";
import { MDBCol, MDBIcon } from "mdbreact";
function DeanRequest() {
    const [Request, setRequest] = useState([]);
    const [searchTerm,setSearchTerm]=useState("")

  useEffect(() => {
    AdminService.getAllRequests()
      .then((response) => {
        setRequest(response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []);

  const style = {
    backgroundColor: "#448AE5",
    color: "white",
    borderRadius: "10px",
    marginTop: "5%",
    padding: "1%",
    fontFamily: "Lalezar",
    fontSize: "4rem",
    paddingRight: "3%",
    borderRadius: "10px",
    borderStyle: "solid",
    borderColor: "#15509D",
  };
  return (
    <>

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

   
    {Request.length > 0 ? (
      Request.filter((request)=>{

if(searchTerm ===""){

return request

}

else if(request.action_notes.toLowerCase().includes(searchTerm.toLowerCase()) || request.action_date.includes(searchTerm.toLowerCase()) ){

return request
}
}).map((request) => (
        <Container style={style}>
          <Row>
            <Col>
              <Row>
                <h3> </h3>
              </Row>
              <Row>
                <h6> </h6>
              </Row>
              <Row>
                <h6> </h6>
              </Row>
              <Row>
                <h6> </h6>
              </Row>

              <Row>
                <Link to={`/DeanRequestTable/${request.action_id}`}>
                  <Button
                    type="submit"
                    style={{
                      float: "left",
                      backgroundColor: "whitesmoke",
                      borderRadius: "10px",
                      borderStyle: "solid",
                      borderColor: "#15509D",
                    }}
                  >
                    اظهار تفاصيل الطلب
                  </Button>
                </Link>
              </Row>

              <Row>
                <h6> </h6>
              </Row>
            </Col>

            <Col>
              <Row>
                <h3> التاريخ</h3>
              </Row>

              <Row>
                <h6>{request.action_date} </h6>
              </Row>
              <Row>
                <h3> ملاحظات</h3>
              </Row>

              <Row>
                <h6>{request.action_notes} </h6>
              </Row>
              <Row>
                <h6> </h6>
              </Row>

              <Row>
                <h6> </h6>
              </Row>

              <Row>
                <h6> </h6>
              </Row>
            </Col>

            <Col>
              <Row>
                <h3> حاله الطلب</h3>
              </Row>

              <Row>
                <h6> </h6>
              </Row>

              <Row>
                <h6> </h6>
              </Row>

              <Row>
                <h6> </h6>
              </Row>

              <Row>
                <h6> </h6>
              </Row>
            </Col>

            <Col>
              <Row>
                <h3> المستخدمين</h3>
              </Row>
              <Row>
                <h6> </h6>
              </Row>

              <Row>
                <h6> </h6>
              </Row>

              <Row>
                <h6> </h6>
              </Row>

              <Row>
                <h6> </h6>
              </Row>
            </Col>

            <Col>
              <Row>
                <h3>الطلب رقم </h3>
              </Row>
              <Row>
                <h6> مخزن قسم </h6>
              </Row>

              <Row>
                <h6> عضو القسم </h6>
              </Row>

              <Row>
                <h6> التاريخ </h6>
              </Row>
            </Col>
          </Row>
        </Container>
      ))
    ) : (
      <h1
        style={{
          textAlign: "center",
          marginTop: "3%",
          fontFamily: "Lalezar",
          fontSize: "4rem",
        }}
      >
        لا توجد طلبات متاحة
      </h1>
    )}
  </>
  )
}

export default DeanRequest