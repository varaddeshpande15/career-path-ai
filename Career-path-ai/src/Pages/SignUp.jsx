import React, { useState } from 'react';
import { InputDemo } from '../components/Email';
import ThreeDButton from '@/assets/Buttons/Button';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className='flex flex-col justify-center border border-white text-white rounded-xl bg-black w-full sm:w-[520px] p-6 sm:p-8 md:p-10'>
        <div>
          <InputDemo 
            type='text' 
            placeholder='Enter your Full Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className='mt-6 w-full'>
          <InputDemo 
            type='email' 
            placeholder='Enter your Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className='mt-6 w-full'>
          <InputDemo 
            type='password' 
            placeholder='Enter Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className='mt-6 flex justify-center'>
          <ThreeDButton onClick={submit}>Submit</ThreeDButton>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
