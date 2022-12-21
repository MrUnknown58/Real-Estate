import React, { useContext, useState } from 'react'
import { DataAPIContext } from '../ContextAPI/DataAPI';
import CardItems from './CardItems'

export default function Property() {
  const a=useContext(DataAPIContext);
  // eslint-disable-next-line
    const [article, setarticle] = useState(a.l.list);
  return (
    <>


<section className="text-gray-600 body-font">
  <div className="container mx-auto bg-gray-200">
    <div className="text-center w-full mb-20    ">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Some Attractive Deals</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Find your Best Suite</h1>
    <div className='grid md:grid-cols-4 grid-cols-1 md:grid-rows-3'>
    {article.map((element)=>{
        return <CardItems element={element} key={element.id}/>
        
    })}
    </div>
    </div>
    </div>
</section>
    </>
  )
}
