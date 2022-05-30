import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import {useState} from "react"
import { Container,Row,Col,Button } from 'react-bootstrap'
import{Link} from "react-router-dom"
import TestData from "./data/TestData"
import TableTemp from "./components/TableTemp"
import TableData from "./data/TableData"
import WarehousesData from "./data/WarehousesData"
import TransactionData from "./data/TransactionData"
import LIstOfItems from "./pages/Admin/LIstOfItems"
import itemsList from "./data/itemsList"
import WareHousesDashboard from "./pages/Admin/WareHousesDashboard"
import NewItem from "./components/NewItem"
import WHItems from "./pages/Admin/WHItems"
import NewWarehouse from "./components/NewWarehouse"
import NewUser from "./components/NewUser"
import AdminMain from "./pages/Admin/AdminMain"
import UsersList from "./pages/Admin/UsersList"
import UpdateUser from "./pages/Admin/UpdateUser"
import GeneralMain from "./pages/GeneralWarehouse/GeneralMain"
import GwarehouseItems from "./pages/GeneralWarehouse/GwarehouseItems"
import GrequestsDashboard from "./pages/GeneralWarehouse/GrequestsDashboard"
import RequestData from "./data/RequestData"
import RequestTable from "./components/RequestTable"
import NewRequestTable from "./components/NewRequestTable"
import NewRefundTable from "./components/NewRefundTable"
import AddItems from "./pages/GeneralWarehouse/AddItems"
import DeletedItems from "./pages/Admin/Deleteditems"
import DeletedWareHouses from "./pages/Admin/DeletedWareHouses" 
import DeletedUsersList from "./pages/Admin/DeletedUsersList"
import User from "./pages/Admin/User"
import DepartmentMain from "./pages/DepartmantWarehouse/DepartmentMain"
import DepratmentItems from "./pages/DepartmantWarehouse/DepratmentItems"
import Item from "./components/Item"
import DrefundDashboard from "./pages/DepartmantWarehouse/DrefundDashboard"
import DAddItems from "./pages/DepartmantWarehouse/DAddItems"
import DeanMain from "./pages/Dean/DeanMain"
import DeanRequestsDashboard from "./pages/Dean/DeanRequestsDashboard"
import DeanRequestTable from "./pages/Dean/DeanRequestTable"
import DeanDepriveDashboard from "./pages/Dean/DeanDepriveDashboard"
import DeanDepriveTable from "./pages/Dean/DeanDepriveTable"
import DeanWarehouses from "./pages/Dean/DeanWarehouses"
import DeanWarehouseItems from "./pages/Dean/DeanWarehouseItems"
import DeanRefundsDashboard from "./pages/Dean/DeanRefundsDashboard"
import DeanRefundTable from "./pages/Dean/DeanRefundTable"
import TransactionsDashboard from "./pages/Dean/TransactionsDashboard"
import GWTableTemp from "./pages/GeneralWarehouse/GWTableTemp";
import Transaction from "./pages/GeneralWarehouse/Transaction";
import NewTransaction from "./pages/GeneralWarehouse/NewTransaction";
import LogIn from "./components/LogIn"
import MainControl from "./components/MainControl"
import RefundTable from "./components/RefundTable"
import Gitem from "./pages/GeneralWarehouse/Gitem"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import DepartmentItem from "./pages/DepartmantWarehouse/DepartmentItem"
import DitemRow from "./pages/DepartmantWarehouse/DitemRow"

function App(){
    const[TranData,setTranData]=useState(TransactionData)
    const[Data ,setData] =useState(TestData)
    const[td ,settd] =useState(TableData)
    const[il,setil]=useState(itemsList)
    const[WHD,setWHD]=useState(WarehousesData)
    const[Requests,setRequests]=useState(RequestData)

   

    return (

        
        <>
     
        
      <Router>
          <Routes>


          <Route path="/" element={<LogIn></LogIn>
                  
              }></Route>


              <Route path="/MainControl" element={
                  <MainControl></MainControl>
              }></Route>
            
              //this is examineComitee routes

            

       
        
                                                        //this is Admin routes
             

        <Route path="/AdminMain" element={
         <> <AdminMain></AdminMain> </>
            
        }></Route>
       

        <Route path="/itemslist" element={
            <LIstOfItems aylist={il}></LIstOfItems>
        }></Route>

        <Route path="/Admin/NewItem" element={

            <NewItem></NewItem>
        }></Route>
         <Route path="/DeletedItems" element={
            <DeletedItems aylist={il}></DeletedItems>
        }></Route>
        <Route path="/WareHouses" element={

            <WareHousesDashboard WH={WHD}></WareHousesDashboard>
        }></Route>


        <Route path="/WareHouses/:id" element={
        
           <WHItems aylist={il}></WHItems>
        }></Route>

        <Route path="/Admin/NewWarehouse" element={
        
            <NewWarehouse></NewWarehouse>
        }></Route>
       <Route path="/DeletedWareHouses" element={

      <DeletedWareHouses WH={WHD}></DeletedWareHouses>
        }></Route>

        <Route path="/NewUser" element={
        
        <NewUser></NewUser>
        }></Route>

        <Route path="/UsersList" element={
            <UsersList></UsersList>
        }></Route>
       <Route path="/User/:id" element={
            <User></User>
        }></Route>
        <Route path="/UpdateUser" element={
            <UpdateUser></UpdateUser>
        }></Route>
          <Route path="/DeletedUsersList" element={

        <DeletedUsersList ></DeletedUsersList>
      }></Route>
        

        //this is GeneralWarehouse routes
          <Route
            path="/GeneralWarehouse"
            element={<GeneralMain></GeneralMain>}
          ></Route>
          <Route
            path="/General/WareHousesItems"
            element={<GwarehouseItems aylist={il}></GwarehouseItems>}
          ></Route>

            <Route
            path="/Generalitem/:id/:Name"
            element={<Gitem></Gitem>}
          ></Route>
          
          <Route
            path="/General/refundsDashboard"
            element={<DrefundDashboard Refund={Data} display="none"></DrefundDashboard>}
          ></Route>
          <Route
            path="/General/Requests"
            element={<GrequestsDashboard display="none" ></GrequestsDashboard>}
          ></Route>
          <Route
            path="/General/NewTransaction"
            element={<NewTransaction></NewTransaction>}
          ></Route>
          <Route
            path="/GenerlWarehouseTransaction/:id"
            element={<GWTableTemp tdata={td}></GWTableTemp>}
          ></Route>
          <Route
            path="/General/transactions/"
            element={<TransactionsDashboard></TransactionsDashboard>}
          ></Route>
          <Route
            path="/RequestTable/:id"
            element={<RequestTable tdata={td}></RequestTable>}
          ></Route>
          <Route
            path="/NewRequestTable"
            element={<NewRequestTable></NewRequestTable>}
          ></Route>
          <Route
            path="/NewRefundTable"
            element={<NewRefundTable></NewRefundTable>}
          ></Route>
          <Route
            path="/General/additems"
            element={<AddItems></AddItems>}
          ></Route> 
                            


                                        //this is DepratmentWarehouse routes

                                        <Route path="/Departmentitem/:id/:Name" element={<DepartmentItem></DepartmentItem>
                                    
                                    
                                    }></Route>

                            <Route path="/DepartmentWarehouse" element={<DepartmentMain></DepartmentMain>

}></Route>

<Route path="/Department/Items" element={

<DepratmentItems aylist={il} ></DepratmentItems>
    }></Route>

<Route path="/Departmentitem/:id/:Name" element={<Item></Item>
                                    
                                    
                                    }></Route>


<Route path="/Department/refundsDashboard" element={
                                    
                                    <DrefundDashboard Refund={Data}></DrefundDashboard>

                                    }></Route>

<Route path="/RefundTable/:id" element={
         <> <RefundTable tdata={td}></RefundTable></>
        
        }></Route>

<Route path="/Department/Requests"  element={<GrequestsDashboard ></GrequestsDashboard>}  ></Route>

<Route path="/Department/additems"  element={<DAddItems></DAddItems>}  ></Route> 






                                                //this is Dean routes

        <Route path="/Dean" element={<DeanMain></DeanMain>}>

        </Route>   

        <Route  path="/Dean/Requests"  element={<DeanRequestsDashboard ></DeanRequestsDashboard>}   ></Route> 
        <Route path="/DeanRequestTable/:id"  element={<DeanRequestTable tdata={td}></DeanRequestTable>}  ></Route>  
        <Route  path="/Dean/Deprives"  element={<DeanDepriveDashboard Req={Requests}></DeanDepriveDashboard>}   ></Route>
        <Route path="/DeanDepriveTable/:id"  element={<DeanDepriveTable tdata={td} ></DeanDepriveTable>}  ></Route>  
        <Route path="/Dean/Warehouses"  element={<DeanWarehouses WH={WHD}></DeanWarehouses>}  ></Route>   
        <Route path="/DeanWareHouses/:id"  element={<DeanWarehouseItems aylist={il} ></DeanWarehouseItems>}  ></Route>     
        <Route  path="/Dean/Refunds"  element={<DeanRefundsDashboard Refund={Data}></DeanRefundsDashboard>}   ></Route>
        <Route  path="/DeanRefundTable/:id"  element={<DeanRefundTable tdata={td}></DeanRefundTable>}   ></Route>   

        <Route
            path="/Dean/Transactions"
            element={
              <TransactionsDashboard
               
              ></TransactionsDashboard>
            }
          ></Route>        




          </Routes>
      </Router>
    

        </>
        
      
       
       
      
        
        
    )
}

export default App