import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthConatext } from '../../Provider/AuthProvider';
const Login = () => {

    const [show ,setshow]=useState(false)
    const {signIn}=useContext(AuthConatext)
const navigate=useNavigate();
const location=useLocation();
console.log(location)


//sate have or no first chack this 
const from=location.state?.from?.pathname || '/'
  
console.log(from)
const handleLoginin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggeduser=result.user;
            console.log(loggeduser)
            form.reset();
            
navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error)
            
        })
    }
   
   
   
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
        <form onSubmit={handleLoginin}>
        <div className="form-control">
            <label htmlFor='' className='lebeltext'>Email</label><br></br>
            <input type='email' placeholder='Email' id="emailid" name='email' required></input>
        </div>
        <div className="form-control">
            <label htmlFor='' className='lebeltext'>password</label><br></br>
            <input type={show?'text':'password'} placeholder='password' id="passwordis" name='password' required></input>
        <p onClick={()=>setshow(!show)}>
            <small>
                {
                  show?<span>hide password</span>:<span>show password</span>  
                }</small></p>
        </div>
        <input className='btn-submit' type='submit' value='Login' name='Login'></input>
        </form>
        <p className='referce'><small> New to Ema-john?<Link to="/SingUp">SignUp</Link></small></p>
        
        
        </div>
    );
};

export default Login;