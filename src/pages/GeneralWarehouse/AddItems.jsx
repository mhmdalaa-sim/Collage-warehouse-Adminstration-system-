import React from 'react'
import {Form,FormControl,FormGroup,FormLabel,Row,Col,Button} from 'react-bootstrap'
import ItemsAddDeleteTableRows from '../../components/ItemsAddDeleteTableRows'
import GeneralSideNav from './GeneralSideNav'
function AddItems() {
  const style = {
    padding: "10px",
    fontFamily: "Lalezar",
    fontSize: "2rem",
  };

  const lablestyle = {
    padding: "0px 15px",
    marginLeft: ".5rem",
    float: "right",
    fontFamily: "Lalezar",
    fontSize: "1.5rem",
    minWidth:'10rem'
  };
  return (
    <>
      <GeneralSideNav></GeneralSideNav>
      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          marginBottom: "5%",
          fontFamily: "Lalezar",
          fontSize: "4rem",
        }}
      >
        {" "}
        اضافه الاصناف
      </h1>
      <div style={style}>
        <Form>
          <Row className="mb-3 " style={style}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:برئاسه السيد</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:التاريخ</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:وعضويه كل من</Form.Label>
            </Form.Group>
          </Row>

          <Row className="mb-3 " style={style}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:السيد</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:الوظيفه</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 " style={style}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:السيد</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:الوظيفه</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 " style={style}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:السيد</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:الوظيفه</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 " style={style}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:السيد</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>:الوظيفه</Form.Label>
              <Form.Control
                style={{ width: "auto", float: "right", direction: 'rtl' }}
                type="email"
                placeholder=""
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 " style={style}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={lablestyle}>
                وقامت اللجنه بفحص الأصناف المدرجه في ظهره بالنسبه المئويه ووفقا
                لما ارتاته من القبول او الرفض والأسباب المبينه قربن كل صنف ولذلك
                علي مقتضي امر التوريد الصادر الي
              </Form.Label>
              <Form.Control
                style={{ width: "10%", float: "right" }}
                type="email"
                placeholder=""
              />
              <Form.Label style={lablestyle}> برقم</Form.Label>
              <Form.Control
                style={{ width: "5%", float: "right" }}
                type="email"
                placeholder=""
              />
              <Form.Label style={lablestyle}> بتاريخ</Form.Label>
              <Form.Control
                type="date"
                style={{ width: "15%", float: "right" }}
                name="date"
              />
            </Form.Group>
          </Row>
        </Form>

        <hr></hr>

        <ItemsAddDeleteTableRows></ItemsAddDeleteTableRows>
      </div>
    </>
  );
}

export default AddItems;
