import React from 'react'
import {Link, useParams} from "react-router-dom"
import { Container,Row,Col,Button,Form,FormLabel,FormControl,InputGroup } from 'react-bootstrap'
import {useState} from "react";
import { useNavigate } from "react-router-dom"
import LoginForm from './LoginForm';
function LogIn() {

  const adminUser={
    email:"admin@admin.com",
    password:"admin123"
  }
  const warehouseUser={
    email:"warehouse@warehouse.com",
    password:"warehouse123"
  }
  const departmentUser={
    email:"department@department.com",
    password:"department123"
  }
  const deanUser={
    email:"dean@dean.com",
    password:"dean123"
  }

  const [user,setUser]=useState({name:"",email:""})

    const[error,setError]=useState("");

    const navigate = useNavigate()

   
    
    var route=""

    const Login=details=>{

      console.log(details)
    
      if(details.email==adminUser.email&&details.password==adminUser.password){
        console.log("Logged in")
        setUser({
          name:details.name,
          email:details.email
        })

        navigate ("/AdminMain")
      }

      else if(details.email==warehouseUser.email&&details.password==warehouseUser.password){
        console.log("Logged in")
        setUser({
          name:details.name,
          email:details.email
        })

        navigate ("/GeneralWarehouse")
      }

      else if(details.email==departmentUser.email&&details.password==departmentUser.password){
        console.log("Logged in")
        setUser({
          name:details.name,
          email:details.email
        })

        navigate ("/DepartmentWarehouse")
      }

      else if(details.email==deanUser.email&&details.password==deanUser.password){
        console.log("Logged in")
        setUser({
          name:details.name,
          email:details.email
        })

        navigate ("/Dean")
      }
      
      else{
        console.log("details do not match")
        setError("details do not match")
      }
    
    }


    const Logout=()=>{

      console.log("logout")
      setUser({
        name:"",
        email:""
      })
    }
    
 
  return (

   <>
    {(user.email!="") ? (
    <div>
      <h2>welcome,<span>{user.name}</span></h2>
      <button onClick={Logout}>Logout</button>
    </div>
   ):(
    <LoginForm Login={Login} error={error}></LoginForm>
   )
    
   }
   </>
  )
}

export default LogIn