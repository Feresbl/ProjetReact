import React from 'react'
import ProductsCard from './ProductsCard'

function Products({products}) {
    console.log(products)
  return (
    <div className="py-10">
    <div className=" flex flex-col items-center gap-4">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">shopping everyday</h1>
        <span className="w-20 h-3[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        Welcome to ScentCraft, where fragrance meets sophistication. Explore our curated collection of scented candles, crafted to elevate your space with captivating aromas. Indulge your senses and transform any moment into a fragrant sanctuary.
        </p>
    </div> 
    <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 " >
   {
    products.map((item)=>(
        <ProductsCard key={item._id} product={item}/>
    ))
   }
  </div>
    </div>
  )
}

export default Products