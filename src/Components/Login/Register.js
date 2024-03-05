import React,{useState} from 'react';
import {Link} from 'react-router-dom'
// import {faCheck,faTimes,faInfoCircle} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export default function Register() {
  const navigate = useNavigate();
  const [register, setregister] = useState({ name:'', username: '', password: '' });
  console.log(register)
  const changeHandler = (e) => {
      setregister({ ...register, [e.target.name]: e.target.value });
  }
  console.log(register);
  const handleSubmit = (e) => {
      console.log(e)
      e.preventDefault();
      console.log(e)
      // axios.post(`http://localhost:3000/api/auth/Register`, register)
      axios.post(`https://healthguard-backend.onrender.com/api/auth/Register`, register)
      .then(res => {  
        navigate('/') })
      .catch(err => alert(err.response.data));
    }


    
    // const userRef = useRef();
    // const errRef= useRef();

    // const[name,setName]=useState('');

    // const[username,setUser]=useState('');
    // const[validUser,setValidUser]=useState(false);
    // const[userFocus,setUserFocus]=useState(false);

    // const[password,setPwd]=useState('');
    // const[validPwd,setValidPwd]=useState(false);
    // const[pwdFocus,setPwdFocus]=useState(false);

    // const[matchPwd,setMatchPwd]=useState('');
    // const[validMatch,setValidMatch]=useState(false);
    // const[matchFocus,setMatchFocus]=useState(false);

    // const [errMsg, setErrMsg]=useState('');

    // useEffect(()=>{
    //   userRef.current.focus();
    // },[])

    // useEffect(()=>{
    //   const result=USER_REGEX.test(username);
    //   console.log(result);
    //   console.log(username);
    //   setValidUser(result);
    // },[username])

    // useEffect(() =>{
    //   const result=PWD_REGEX.test(password);
    //   setValidPwd(result);
    //   const match= password=== matchPwd;
    //   setValidMatch(match);
    // },[password, matchPwd])

    // useEffect(()=>{
    //   setErrMsg('');
    // },[username,password,matchPwd])

    // console.log(username)


  return (
    <section className='form-container'>
      {/* <p ref={errRef} className={errMsg ? "errMsg" : "offsscreen"} aria-live="assertive">{errMsg}</p> */}
      <h1>Register Here</h1>
      <form className='login-form' onSubmit={handleSubmit} >
        <div className='form-details'>

        <label htmlFor="name">
          Name: 
          </label>
          <input 
          type="text" 
          name='name' 
          onChange={changeHandler} 
          autoComplete='off' 
          required />


        <label htmlFor="username" >
          Username:
        {/* <span className={validUser ? "valid" : "hide"}>
         < FontAwesomeIcon icon={faCheck}/> 
        </span>
        <span className={validUser || !username ? "hide" : "invalid"}>
         < FontAwesomeIcon icon={faTimes}/>  */}
         {/* </span> */}
        </label>
        <input 
        type="text"
        name='username'
        autoComplete="off"
        onChange={changeHandler}
        required
        
        />
       

        <label htmlFor="password">
          Password:
          </label>
          <input
          type="password"
          // id="password"
          name='password'
          onChange={changeHandler}
          autoComplete='off'
          required
          />

        <label htmlFor='confirm_pwd'>
          Confirm Password:
        </label>
        <input 
        type="password"
          onChange={changeHandler}
          autoComplete='off'
          required
          />
       </div>
       <div className='form-details'>
            <button >
              Register
            </button>
        </div>
        
    </form>
    
      <Link to="/" variant="body2" className='relink'>
        Already have an account? Login here.</Link>

    </section>
    )}
    
  