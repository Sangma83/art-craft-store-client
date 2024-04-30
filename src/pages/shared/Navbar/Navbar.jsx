import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import defaultPic from '../../../assets/default.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
// import ReactTooltip from 'react-tooltip';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isRegistered, setIsRegistered] = useState(false);
   
   
    const handleRegister = () => {
     
      setIsRegistered(true);
    };

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
      }

    const navLinks = <>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/allCraftitem'>Art & Craft Item</NavLink></li>
       <li><NavLink to='/contact'>Contact Us</NavLink></li>
       {/* <li><NavLink to='/login'>Login</NavLink></li> */}
       {/* <li><NavLink to='/register'>Register</NavLink></li> */}
      {
        user && <>
         <li><NavLink to='/addItem'>Add Craft Item</NavLink></li>
         <li><NavLink to='/myList'>My List</NavLink></li>
         {/* <li><NavLink to='/update'>Update Profile</NavLink></li> */}
        </>
      }
    
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <div className='mb-4' >
        <img className='w-1/2 lg:w-1/3' src={logo} alt="" />
        
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  
  {
  user ? (

    isRegistered ? (
      // If user is not logged in but registered, show login button
      <Link to='/login'><button className="btn btn-ghost">Login</button></Link>
    ):
    <>
      <div className="tooltip" data-tip={user.displayName}>
        <button className=""><img alt="User profile" className="w-10 rounded-full" src={user?.photoURL || defaultPic} /></button>
      </div>
      <button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button>
    </>
  ) :
  
  (
    <>
      <Link to='/register'><button onClick={handleRegister} className="btn btn-ghost">Register</button></Link>
      <Link to='/login'><button className="btn btn-ghost">Login</button></Link>
    </>
  )
}

  </div>
</div>
    );
};

export default Navbar;