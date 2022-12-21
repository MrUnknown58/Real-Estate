import React from 'react'

export default function FeaturedProperty() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto bg-gray-200">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Featured Property Types</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Find your best suited Property</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
      </div>
    </div>
    <div className='grid md:grid-rows-1 md:grid-flow-col md:gap-4 grid-cols-1'>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className='md:pl-14 md:w-1/3'>
      <div className="p-4 flex flex-col text-center items-center bg-white shadow-lg shadow-cyan-500/50">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <img className='h-14 w-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhivs8tyP1PTtdsA6K7_eHyc75ysvGJsLWg&usqp=CAU' alt=""/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Red Carpet Real Estate</h2>
          <p className="leading-relaxed text-base">5 rooms per floor, 1 Bathroom and Living Room</p>
          <a href="https://www.99acres.com/" target="_blank" rel="noreferrer" className="mt-3 text-indigo-500 inline-flex items-center hover:cursor-pointer underline-offset-3 hover:underline">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        </div>
      </div>
      <div className='md:pl-14 md:w-1/3 w-[90%] md:h-full h-23vh'>
      <div className="p-4 flex flex-col text-center items-center bg-white shadow-lg shadow-cyan-500/50">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <img className='h-14 w-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORPmPHinbDY4LnCMBLBnhjBTnzelC6B4asA&usqp=CAU' alt="" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Fairmount Properties</h2>
          <p className="leading-relaxed text-base">3 rooms per floor,2 Bathroom</p>
          <a href="https://www.99acres.com/" target="_blank" rel="noreferrer" className="mt-3 text-indigo-500 inline-flex items-center hover:cursor-pointer underline-offset-3 hover:underline">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      </div>
      <div className='md:pl-14 md:w-1/3 md:pr-10'>
      <div className="p-4 flex flex-col text-center items-center bg-white shadow-lg shadow-cyan-500/50">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <img className='h-14 w-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6Fvf706l5jwooDFq4vzL089UGabXQxHIEA&usqp=CAU' alt=""/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Herringbone Realty</h2>
          <p className="leading-relaxed text-base">6 rooms per floor,4 Bathroom and Living Room</p>
          <a href="https://www.99acres.com/" target="_blank" rel="noreferrer" className="mt-3 text-indigo-500 inline-flex items-center hover:cursor-pointer underline-offset-3 hover:underline">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
</section>

    </>
  )
}
