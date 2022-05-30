import React, { useEffect } from 'react'
import{Link} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { Container,Row,Col,Button,Form,FormControl,option } from 'react-bootstrap'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Carts from './Carts.json'
import AdminService from '../../services/AdminService'

function TransactioRow({row,list}) {
  const [stocks,setStock] = useState({});
  const [pend,setPend] = useState(true);
  const [price,setPrice] = useState('');
  const [expDate,setExpDate] = useState('');


  const[quantity,setQuant] = useState(0);
  const[request,setReq] = useState();
  const[stock,setSt] = useState();

      useEffect(()=>{
        AdminService.getItemStocks(row.item.item_id).then(response => {
          setStock(response.data);
          setPend(false);
          //  list[list.length] = {"request":{},"stock":{},"quantity":quantity};
        }).catch(err => console.log(err))

  },[])

  const navigate =useNavigate();

  
 if(pend) return <h1>PLEASE WAIT...</h1>
 else 
  return (
<>

  
<tr class=" d-flex flex-row-reverse" >
<td class="p-2 col px-1" style={{textAlign:"center",fontSize :"22px"}}>{row.request_id}</td>
    <td class="p-2 col px-1" style={{textAlign:"center",fontSize :"22px"}}>{row.item.item_name}</td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"22px"}}>{row.requested_quantity}</td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"22px"}}>{row.allowed_quantity}</td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"22px"}}>
    <Form.Select aria-label="Default select example"     onChange={(e)=>
                {const temp = stocks.find(it=>(it.stock_id==(e.target.value)));
               setPrice(temp.price)
               setExpDate(temp.expired_date)
               const tempReq={"request_id":row.request_id,"action":row.action,"item":row.item,"exchange_reason":row.exchange_reason,"notes":row.notes,"allowed_quantity":row.allowed_quantity,"requested_quantity":row.requested_quantity}
               setReq(tempReq)
               setSt(temp)
               list[list.length] = {"request":tempReq,"stock":temp,"quantity":0}
                }}>    
                <option>اختر رقم الصنف</option>
                {stocks.length>0?stocks.map(st=>
                  (<option key={st.stock_id} value={st.stock_id}>{st.stock_id}</option>
                        )):<option>لايوجد اصناف</option>
            }               
            </Form.Select>    
    </td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"22px"}}>{price}</td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"22px"}}>{expDate}</td>
    <td class="p-2 col px-1"style={{textAlign:"center",fontSize :"15px"}}><input type="number" onChange={(e)=>{
      // console.log(e.target.value)
      list[list.length-1].quantity = e.target.value 
      console.log('here')
      console.log(list[list.length-1].quantity)
      console.log(list)
      setQuant(e.target.value)
      // transList[transList.length-1].quantity = e.target.value
    }}></input></td>

  </tr>
  </>
  )
}

export default TransactioRow