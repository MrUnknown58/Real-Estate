import React, { Component } from 'react'
import {BsFillHouseDoorFill} from "react-icons/bs"
import {MdOutlineApartment,MdVilla} from "react-icons/md"
import {FaHotel} from 'react-icons/fa'
import {HiBuildingOffice2} from 'react-icons/hi2'
export default class PropertyList extends Component {
  render() {
    return (
      <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Property List</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We have everthing you need.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full shadow-lg shadow-indigo-500/50">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <BsFillHouseDoorFill className='text-indigo-400 w-12 h-12 mb-3 inline-block' />
          <h2 className="title-font font-medium text-3xl text-gray-900">122</h2>
          <p className="leading-relaxed">Family House</p>
        </div>
      </div>
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full shadow-lg shadow-green-500/50">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <MdOutlineApartment className='text-green-300 w-12 h-12 mb-3 inline-block'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">383</h2>
          <p className="leading-relaxed">Apartments</p>
        </div>
      </div>
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full shadow-lg shadow-orange-500/50">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <MdVilla className='text-orange-300 w-12 h-12 mb-3 inline-block'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">374</h2>
          <p className="leading-relaxed">House & Villa</p>
        </div>
      </div>
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full shadow-lg shadow-violet-500/50">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <FaHotel className='text-violet-300 w-12 h-12 mb-3 inline-block'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">26</h2>
          <p className="leading-relaxed">Condos</p>
        </div>
      </div>
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full shadow-lg shadow-yellow-500/50">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <HiBuildingOffice2 className='text-yellow-300 w-12 h-12 mb-3 inline-block'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">146</h2>
          <p className="leading-relaxed">Office and Studios</p>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    )
  }
}
