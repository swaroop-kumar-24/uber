import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-right bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full '>
        <img className='w-16 ml-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-5 px-3 rounded'>
            <h2 className='text-3xl font-bold '>Get started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center bg-black py-3 w-full text-white rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
