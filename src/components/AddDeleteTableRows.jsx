import { useState } from "react/cjs/react.development"
import {useParams,useNavigate} from "react-router-dom"
import TableRows from "./TableRows"
import { Container,Row,Col,Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import AdminService from'../services/AdminService'

const AddDeleteTableRows=()=>{
  const [notes,setNotes]=useState('طلب جديد')
  const [list, setRowsData] = useState([]);

  const navigate=useNavigate()
  const saveRequest=(e)=>{
    e.preventDefault();
    console.log(list)
    console.log(list[0].item)
    const input={list,notes};
    AdminService.makeRequest(input).then(response=>{
      navigate('/');
  })
  .catch(error=>{
     console.log("Something went wrong",error);
  })}
    const tablestyle={

        float:"centre",
        width:"80%",
        margin:"5%",
        fontFamily: 'Lalezar',
    fontSize:"3rem"

    }
   

 
    const addTableRows = ()=>{
  
        const rowsInput={
          item:null , 
           exchange_reason:'',     
           notes:'',    
            allowed_quantity:'0',
            requested_quantity:'',
        } 
        setRowsData([...list, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...list];
        rows.splice(index, 1);
        setRowsData(rows);
       }
 
 
  
    return(

      <>


      <Table striped bordered hover size="lg" style={tablestyle} >
        <thead>
          <tr class="   ">
          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
          
            
           
            
         
           
          
           
             <th class=""> سند الصرف</th>
            <th class="">  الملاحظات</th>
            <th class="">الكميه المصرح بها</th>
            <th class="">الكميه المطلوبة </th>
            <th class="">اسم الصنف</th>
                 
          </tr>
        </thead>
      
        <tbody>
        <TableRows rowsData={list} deleteTableRows={deleteTableRows} />
        </tbody>
       
      </Table>
      
      <Button type="submit" style={{
          marginLeft:"10%",fontFamily: 'Lalezar',
              fontSize:"2rem" ,marginTop:"1%",borderRadius: "10px",
      }} onClick={(e)=>saveRequest(e)}>تاكيد </Button>
              </>


     
    )

}
export default AddDeleteTableRows