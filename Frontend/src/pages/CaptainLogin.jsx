import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainLogin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [captainData,setCaptainData]=useState({});

    const SubmitHandler=(e)=>{
        e.preventDefault();
        setCaptainData({
            email:email,
            password:password
        })
        setEmail('');
        setPassword('');
    }
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
            <div>
                <img className='w-25 ml-1 pb-4 pt-4' src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />
    
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
             <p className='text-center'>Join in the fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a captain</Link></p>
          </form>
            </div>
            <div>
                <Link to='/login'
                className='bg-[#ec935d] flex items-center justify-center text-white w-full mt-2 py-3 rounded text-lg'
                >Sign in as a User</Link>
            </div>
        </div>
  )
}

export default CaptainLogin
