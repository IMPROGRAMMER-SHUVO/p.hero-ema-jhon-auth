import React, { useContext } from 'react';
import { AuthConatext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading }=useContext(AuthConatext)
     const location=useLocation()
     console.log(location)
  
    if(loading){
    return <div>Loading............</div>
   }
    if(user){
        return children
    }
    return <Navigate to='/Login'state={{from:location}} replace></Navigate>
        
            
  
};

export default PrivateRoutes;