import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../assets/Buttons/Button';

function Navbar() {
  return (
    <nav className='flex justify-between items-center p-4 text-1xl'>
      <div className='text-white'>
        <span className='text-2xl font-bold'>CareerPathAI</span>
      </div>
      <ul className='flex gap-20 list-none text-white p-0 items-center justify-end w-full cursor-pointer'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <div className='flex gap-10 text-black'>
          <Link to="/login"><Button>Login</Button></Link>
          <Link to="/signup"><Button>Sign Up</Button></Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
