import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import {useState} from "react"
import { Container,Row,Col,Button } from 'react-bootstrap'
import{Link} from "react-router-dom"
import NavBar from "./pages/Examination Comitee/NavBar"
import Report from "./pages/Examination Comitee/Report"
import RefundsDashboard from "./pages/Examination Comitee/RefundsDashboard"
import TestData from "./data/TestData"
import TableTemp from "./components/TableTemp"
import TableData from "./data/TableData"
import WarehousesData from "./data/WarehousesData"
import RefundTable from "./pages/Examination Comitee/RefundTable"
import Item from "./pages/Examination Comitee/Item"
import MainControl from "./pages/Examination Comitee/MainControl"
import AdminNavBar from "./pages/Admin/AdminNavBar"
import LIstOfItems from "./pages/Admin/LIstOfItems"
import itemsList from "./data/itemsList"
import WareHousesDashboard from "./pages/Admin/WareHousesDashboard"
import NewItem from "./components/NewItem"
import WHItems from "./pages/Admin/WHItems"
import NewWarehouse from "./components/NewWarehouse"
import NewUser from "./components/NewUser"
import UsersList from "./pages/Admin/UsersList"
import UpdateUser from "./pages/Admin/UpdateUser"

function App(){
    
    const[Data ,setData] =useState(TestData)
    const[td ,settd] =useState(TableData)
    const[il,setil]=useState(itemsList)
    const[WHD,setWHD]=useState(WarehousesData)

   

    return (

        
        <>
     
        
      <Router>
          <Routes>
              <Route path="/" element={
                  <MainControl></MainControl>
              }></Route>
            
              //this is examineComitee routes

              <Route path="/ExamineMain" element={
            <NavBar></NavBar>
        }></Route>

        <Route path="/ExamineMain/Report" element={
            <><NavBar></NavBar>
            <Report></Report></>
            

        }></Route>

        <Route path="/ExamineMain/RefundsDashboard" element={
         <> <RefundsDashboard Refund={Data}></RefundsDashboard></>
            

        }></Route>


        <Route path="/ExamineMain/RefundTable/:id" element={
         <> <RefundTable tdata={td}></RefundTable></>
        
        }></Route>
        <Route path="/ExamineMain/item/:id/:name" element={
         <> <Item></Item> </>
            
        }></Route>

        
                                                        //this is Admin routes
             
        <Route path="/Admin" element={
         <> <AdminNavBar></AdminNavBar> </>
            
        }></Route>

        <Route path="/itemslist" element={
            <LIstOfItems aylist={il}></LIstOfItems>
        }></Route>

        <Route path="/Admin/NewItem" element={

            <NewItem></NewItem>
        }></Route>

        <Route path="WareHouses" element={

            <WareHousesDashboard WH={WHD}></WareHousesDashboard>
        }></Route>


        <Route path="/WareHouses/:id" element={
        
           <WHItems aylist={il}></WHItems>
        }></Route>

        <Route path="/Admin/NewWarehouse" element={
        
            <NewWarehouse></NewWarehouse>
        }></Route>


        <Route path="/NewUser" element={
        
        <NewUser></NewUser>
        }></Route>

        <Route path="/UsersList" element={
            <UsersList></UsersList>
        }></Route>

        <Route path="/UpdateUser" element={
            <UpdateUser></UpdateUser>
        }></Route>

        
          </Routes>
      </Router>
    

        </>
        
      
       
       
      
        
        
    )
}

export default App