import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [IP, setIP] = useState('');
  const getIP = async()=>{
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4);
}
useEffect(()=>{
  getIP();
},[])
  return (
    <>
    <header className="text-gray-600 body-font border-b border-gray-400">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  {/* <link rel="icon" href="%PUBLIC_URL%/i.jfif" /> */}
  <img src='./public/i.jfif' alt=""/>
  <Link to={"/"}>
    <span className='text-2xl font-semibold '>Downtown Apartments</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link to='/a' className="mr-5 hover:text-gray-900">About</Link>
      <Link to='/a' className="mr-5 hover:text-gray-900">Services</Link>
      <Link to='/a' className="mr-5 hover:text-gray-900">Blog</Link>
      <Link to='/a' className="mr-5 hover:text-gray-900">Pricing</Link>
      <Link to='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <div className='mr-10 border border-gray-400'>Your IP Address: {IP}</div>
    <Link to="/a">
    <button className="inline-flex items-center bg-green-600 border-0 py-1 px-3 text-white focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0">Sign in
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>
  </div>
</header>

    </>
  )
}
