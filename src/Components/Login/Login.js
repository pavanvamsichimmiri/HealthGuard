import React,{ useState} from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({ username: '', password: '' });
    const changeHandler=(e)=>{
    setlogin({...login, [e.target.name]: e.target.value});

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post(`http://localhost:3000/api/auth/Login`, login)
    axios.post(`https://healthguard-backend.onrender.com/api/auth/Login`, login)
    .then(res => {
     localStorage.setItem('token', res.data.token); 
     navigate('/Home') })
     .catch(err => alert(err.response.data));
}

  return(
    <div className='Start'>
    <h1 className='Welcome'> WELCOME TO HEALTHGUARD!!!</h1>
    <h3>Explore the page by Logging In.</h3>
  <section className='form-container'>
      <h1>Login Here</h1>
      <form className='login-form' onSubmit={handleSubmit} >
        <div className='form-details'>
        <label htmlFor="username" >
          Username:
        </label>
        <input 
        type="text"
        name="username"
        autoComplete="off"
        onChange={changeHandler}
        required
        />
        <label htmlFor="password" >
          Password:
        </label>
        <input 
        type="password"
        name="password"
        onChange={changeHandler}
        required
        />
         </div>
        <div className='form-details'>
            <button >Login</button>
        </div>
        <Link to="/Register" variant="body2" className='relink'>
        Dont have an account? Register here.</Link>
        </form>
        </section>
    
    </div>
)}
