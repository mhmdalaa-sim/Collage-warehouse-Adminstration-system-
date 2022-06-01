import {useState,useEffect} from "react";
import { Container,Row,Col,Button,Form,FormControl } from 'react-bootstrap'
import AdminService from '../services/AdminService';

function TableRows({rowsData, deleteTableRows}) {
    const [items,setItems]= useState([])

    useEffect(()=>{
      AdminService.getAllItems().then(response =>{
        setItems(response.data);
     })
     .catch(error =>{
    
        console.log('something went wrong',error);
    
    })
    },[])  
    return(
        
        rowsData.map((data, index)=>{
            
            return(
                <tr key={index}>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                
                <td>
               <input type="text" checked='' onChange={(e)=>
                data.exchange_reason=(e.target.value)
                } name="exchange_reason" className="form-control"/>
                </td>
                
                <td>
               <input type="text" checked='' onChange={(e)=>
                data.notes=(e.target.value)
                } name="notes" className="form-control"/>
                </td>


                <td><input type="number" checked=''     
                name="allowedquantity" className="form-control"  disabled
              readOnly /> </td>

                <td><input type="number" checked=''  onChange={(e)=>
                   data.requested_quantity=(    e.target.value)
                    } name="requested_qunatity" className="form-control" /> </td>
                <td>

                <Form.Select aria-label="Default select example"     onChange={(e)=>
                    data.item = items.find(it=>(it.item_id==(e.target.value)))
                    }>      
                <option>Please Select</option>
                {items.length>0?items.map(i=>
                  (<option key={i.item_id} value={i.item_id}>{i.item_name}</option>
                        )):<option>لايوجد اصناف</option>
            }               
            </Form.Select>     
                     </td>
                
            </tr>
            
                    
            )
        })
   
    )
    
}

export default TableRows;