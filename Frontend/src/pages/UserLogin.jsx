import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [userData,setUserData]=useState({});

    const SubmitHandler=(e)=>{
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        })
        setEmail('');
        setPassword('');
    }


  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
        <div>
            <img className='w-16 ml-1 pb-5 pt-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <form onSubmit={(e)=>{
        SubmitHandler(e)
      } }>
        <h3 className='text-lg font-medium mb-3 mt-5'>Whats your email</h3>
        <input
        className='bg-[#eeeeee] rounded-md border p-2 mb-7 w-full text-lg placeholder:text-base'
         required
         value={email}
        onChange={(e)=>{
                setEmail(e.target.value)
            }}
          type="email" 
          placeholder='email@example.com' />

        <h3 className='text-lg font-medium mb-2'>Enter password</h3>
        <input
        className='bg-[#eeeeee] rounded-md border p-2 mb-7 w-full text-lg placeholder:text-base'
         required 
         value={password}
        onChange={(e)=>{
                setPassword(e.target.value)
            }}
         type="password" 
         placeholder='Enter password' />
         <button
            className='bg-black text-white w-full py-3 mt-2 mb-3 rounded text-lg '
         >Login</button>
         <p className='text-center'>Dont have an account? <Link to='/signup' className='text-blue-600'>Sign up</Link></p>
      </form>
        </div>
        <div>
            <Link to='/captain-login'
            className='bg-[#37a866] flex items-center justify-center text-white w-full mt-2 py-3 rounded text-lg'
            >Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin
