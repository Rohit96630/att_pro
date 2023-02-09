import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Page.css"

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin=()=>{
    navigate('/attendance');
  }
  return (
      <div className='text-center p-5'>

      <h1 className='text-primary '>Login Page</h1>
      <form className="  w-25 p-3 rounded mx-auto d-block form_login" style={{ backgroundColor: "#eee"}}>
        <label className='w-100'> 
         <input 
        type="text"
        placeholder="Username"
    
      />
      </label>
        <label className='w-100 p-4'>
        <input
        type="password"
        placeholder="Password"
       
      />
        </label>
        <label>
      <button onClick={handleLogin} >LOGIN</button>
        </label>
        </form>
    </div>
    
  )
}

export default LoginPage