
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthConatext } from '../../Provider/AuthProvider';


const Header = () => {
  const {user,logout}=useContext(AuthConatext)
    console.log(user)
    const handlelogout=()=>{
      logout()
      .then(result=>{
       
      })
      .catch(error=>{
        console.log(error)
      })
    }
        

  return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to='/SingUp'>Singup</Link>
            {user && <span>wellcome{user.email}<button className='btn-color' onClick={handlelogout}>logout</button></span>}
            </div>
        </nav>
    );
};

export default Header;