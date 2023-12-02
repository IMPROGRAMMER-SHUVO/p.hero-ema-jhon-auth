import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthConatext } from '../../Provider/AuthProvider';
const SingUp = () => {
    const [error ,setError]=useState('')
const {createUser}=useContext(AuthConatext)
    
    
    const  handleSignUp=event=>{
        
event.preventDefault()

const form=event.target
const email=form.email.value;
const password=form.password.value;
const confirmpassword=form.confirmpassword.value;
console.log(email,password,confirmpassword)
setError('')
if(password !==confirmpassword)
{
    setError('you passrod shouldnot match')
    return
}
else if(password.length<6){
    setError('password must  be al lest 6 word')
return
}


createUser(email,password)
.then(result=>{
    const loggeduser=result.user;
    console.log(loggeduser)
})
.catch(error=>{
    console.log(error)
    setError(error.message)
})
    }
return (
   
                 <div className='form-container'>
            <h2 className='form-title'>Signup</h2>
        <form onSubmit={handleSignUp}>
        <div className="form-control">
            <label htmlFor='email' className='lebeltext'>Email</label><br></br>
            <input type='email' placeholder='Email' id="" name='email' required></input>
        </div>
        <div className="form-control">
            <label htmlFor='password' className='lebeltext'>password</label><br></br>
            <input type='password' placeholder='password' id="" name='password' required></input>
        </div>
        <div className="form-control">
            <label htmlFor='confirmpassword' className='lebeltext'>Confirm Password</label><br></br>
            <input type='passord' placeholder='password confirm' id="" name='confirmpassword' required></input>
        </div>
        <input className='btn-submit' type='submit' value='signup' name='singup'></input>
        </form>
        
        <p className='referce'><small> allreay have an account?<Link to="/Login">Login</Link></small></p>
        <p className='texterorr'>{error}</p>
        </div>
      
    );
};

export default SingUp;