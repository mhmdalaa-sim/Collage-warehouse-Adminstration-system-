import React from 'react'
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl,MydModalWithGrid ,Modal,Form} from 'react-bootstrap'
import{Link} from "react-router-dom"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import AdminService from '../../services/AdminService'
function TransferItem({item}) {
    const style={
        backgroundColor:"white",
        color:"black",
        borderRadius: "10px",
        marginTop:"3%",
        padding:"1%",
        border: '5px solid #448AE5', 

        fontFamily: 'Lalezar',
  
    }

    const rowstyle={
        fontFamily: 'Lalezar',
      fontSize:"1.5rem"
      }
    
      const navigate =useNavigate();
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      
      const[from,setFrom]=useState('');
      const[to,setTo]=useState('');
      const[quantity,setQuantity]=useState('');



      const handleSelectFrom=(e)=>{
        console.log(e);
        setFrom(e)
      }

      const handleSelectTo=(e)=>{
        console.log(e);
        setTo(e)
      }



      const saveItem=(e)=>{
        e.preventDefault();
        const Transaction=[{from,to,quantity}];
        AdminService.createItem(item).then(response=>{
          navigate(`/DeanWareHouses/${item.id}`);
      }
      )
      .catch(error=>{
         console.log("Something went wrong",error);
      })}
    

      function MydModalWithGrid(props) {
        return (
          <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                      <h1 style={{fontFamily: 'Lalezar',
            fontSize:"1.5rem",textAlign:"center"}}>تحويل</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
                
                <Row>
                
               
                  <Col >
                        <h1 style={{fontFamily: 'Lalezar',
            fontSize:"1.5rem",textAlign:"center"}}> تحويل من</h1>
                        <Form.Select aria-label="Default select example" onSelect={handleSelectFrom}>
                        <option eventKey="0">حاسب</option>
                        <option eventKey="1">مخزن رئيسي</option>
                        <option eventKey="2">كيمياء</option>
                        <option eventKey="3">فيزياء</option>
                        </Form.Select>
                  </Col>
                  
               
                </Row>

                <Row>
                
               
                  <Col  style={{marginTop:"3%"}}>
                        <h1 style={{fontFamily: 'Lalezar',
            fontSize:"1.5rem",textAlign:"center"}}> تحويل الى</h1>
                        <Form.Select aria-label="Default select example" onSelect={handleSelectTo}
>
                        <option eventKey="0">حاسب</option>
                        <option eventKey="1">مخزن رئيسي</option>
                        <option eventKey="2">كيمياء</option>
                        <option eventKey="3">فيزياء</option>
                        </Form.Select>
                  </Col>
                  
               
                </Row>



                <Row>

                <Col  style={{marginTop:"3%"}}>
                      <h1 style={{fontFamily: 'Lalezar',
          fontSize:"1.5rem",textAlign:"center"}}> الكميه  </h1>
          
          <Form.Control type="number" onChange={(e)=>setQuantity(e.target.value)}/>
    
    
  
                      
                </Col>
                
               
                

                
             
              </Row>


              <Row>
            

              </Row>


              </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button  variant="success" onClick={(e)=>saveItem(e)} style={{ fontFamily: 'Lalezar',
      fontSize:"1.5rem"}}>تاكيد</Button>
              <Button  variant="danger" onClick={props.onHide} style={{ fontFamily: 'Lalezar',
      fontSize:"1.5rem"}}>الغاء</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      
      const [modalShow, setModalShow] = useState(false);



  return (
  <>



    <tr class=" d-flex flex-row-reverse" >
    <td class="p-2 col px-1">
    <Link to={`/Generalitem/${item.id}/${item.Name}`}>{item.id}</Link>
    </td>
    <td class="p-2 col px-1">{item.Name}</td>
    <td class="p-2 col px-1">{item.date}</td>
    <td class="p-2 col px-1"> <Button variant="success" onClick={() => setModalShow(true)} style={{float:'left',backgroundColor:"#448AE5",color:'white',fontFamily: 'Lalezar',
    fontSize:"1rem", borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",
    }}>
        تحويل
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} /> </td>
  
  </tr>


  </>
  )
}

export default TransferItem