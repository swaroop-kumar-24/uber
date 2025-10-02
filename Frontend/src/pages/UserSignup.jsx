import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {
 
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const [firstName,setFirstName]=useState('');
      const [lastName,setLastName]=useState('');
      const [userData,setUserData]=useState({});

      const SubmitHandler=(e)=>{
          e.preventDefault();
          setUserData({
            fullName:{
              firstName:firstName,
              lastName:lastName
            },
              email:email,
              password:password
          })
            
          setEmail('');
          setPassword('');
          setFirstName('');
          setLastName('');          
      }
  return (
   

    <div className='p-7 flex flex-col h-screen justify-between'>
        <div>
            <img className='w-16 ml-1 pb-5 pt-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <form onSubmit={(e)=>{
        SubmitHandler(e)
      } }>
        <h3 className='font-lg text-medium '>What's your name?</h3>
        <div className='flex gap-4 mt-3 mb-6'>
          <input
        className='bg-[#eeeeee] rounded-md border p-2  w-1/2  text-lg placeholder:text-base'
         required
         value={firstName}
        onChange={(e)=>{
                setFirstName(e.target.value)
            }}
        
          type="text" 
          placeholder='First name' />
          <input
        className='bg-[#eeeeee] rounded-md border p-2  w-1/2 text-lg placeholder:text-base'
        
        value={lastName}
        onChange={(e)=>{
                setLastName(e.target.value)
            }}
            type="text" 
          placeholder='Last name' />
        </div>
        <h3 className='font-lg text-medium mb-2'>Whats your email</h3>
        <input
        className='bg-[#eeeeee] rounded-md border p-2 mb-6 w-full text-lg placeholder:text-base'
         required
        value={email }
        onChange={(e)=>{
                setEmail(e.target.value)
            }}
          type="email" 
          placeholder='email@example.com' />

        <h3 className='font-lg text-medium mb-2'>Enter password</h3>
        <input
        className='bg-[#eeeeee] rounded-md border p-2 mb-6 w-full text-lg placeholder:text-base'
         required 
          value={password}
        onChange={(e)=>{
                setPassword(e.target.value)
            }}
         type="password" 
         placeholder='Enter password' />
         <button
            className='bg-black text-white w-full py-3 mt-2 mb-3 rounded text-lg '
         >Register</button>
         <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </form>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        </div>
    </div>
  )
}

export default UserSignup
