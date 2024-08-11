import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../assets/Buttons/Button';
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  
    const { loginWithRedirect } = useAuth0();
  
  return (
    <nav className='flex flew-wrap justify-between items-center p-4 text-1xl min-w-full bg-black'>
      <div className='text-white'>
        <span className='text-2xl font-bold'>CareerPathAI</span>
      </div>
      <ul className='flex gap-20 list-none text-white p-0 items-center justify-end w-full cursor-pointer'>
        <li><Link to="">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <div className='flex gap-10 text-black'> 
          {/* <Link to="/signup"><Button>Sign Up</Button></Link> */}
          {/* <Link to="/login"> */}
          {/* <Button onClick={()=>loginWithRedirect()}>Login</Button> */}
          <button 
          className="group relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-b-2 border-l-2 border-r-2 border-red-700 bg-gradient-to-tr from-red-600 to-red-500 px-4 py-1 text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:border-red-600 active:shadow-none"
          onClick={() => loginWithRedirect()}>Log In</button>;
          {/* </Link> */}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
