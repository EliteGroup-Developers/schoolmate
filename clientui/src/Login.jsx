import React from 'react'

import{useRef,useState,useEffect ,useContext} from 'react'

import AuthContext from "./context/AuthProvider"

import axios from './api/axios';
import "./reg-login.css";

const LOGIN_URL='/auth';

// import MainPage from './MainPage'


const Login = () => {

  const{ setAuth }=useContext(AuthContext)

    const userRef=useRef();
    const errRef=useRef();

    const [email,setEmail]=useState('');
    console.log(email);
    const [pwd,setPwd]=useState('');
    console.log(pwd);
    const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);
    console.log(pwd);



    useEffect(()=>{
        userRef.current.focus();

    },[]);

    useEffect(()=>{
        setErrMsg('');


    },[email,pwd])



      const handleSubmit = async (e) => {


        e.preventDefault();

try{
  const response=await axios.post(LOGIN_URL,JSON.stringify({email:email,pwd:pwd}),{
    headers: {'Content-Type': 'application/json',
    withCredentials: true
  
  },

  });

  console.log(JSON.stringify(response?.data));
  // console.log(JSON.stringify(response));
  const accessToken=response?.data?.accessToken;
  const roles=response?.data?.roles
  setAuth({email,pwd,roles,accessToken})
  setEmail('');
  setPwd("");
  setSuccess(true);


}catch(err){
  if(!err?.message){
    setErrMsg('No Server Response');

  }else if(err.response?.status===400){
    setErrMsg('Missing UserName and password');
  }else if(err.response?.status===401){
    setErrMsg('Unauthorized');
  }else{
    setErrMsg('Login Failed');


  }
  errRef.current.focus();

}



      }


    


    

  return (
    <>

    {success?(
      <section>
        {/* <MainPage/> */}
      </section>
    ):(
    
    
    <section>
      <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
<h1 className='text-2xl text-center m†-10  sm:text-4xl'>Login</h1>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label className='color text-[#ADECCF]' htmlFor='username'>email:</label>
        <input
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        required
        placeholder='youremail@gmail.com'
        className='sm:w-[40rem] '
        
        />
        <label className='color  text-[#ADECCF]' htmlFor='username'>Password:</label>
        <input
        type="password"
        id="password"
        ref={userRef}
        onChange={(e)=>setPwd(e.target.value)}
        value={pwd}
        required
        
        />
        <button className='button'>Sign In</button>

      </form>
      <p>
        Need an Account?<br/>
        <span className='line'>
          {}
          <a href="github.com">Sign Up</a>
        </span>
      </p>
      
    </section>




  )
}
</>
  )
}

export default Login;
