import React from 'react'
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, resetCart } from '../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function CartItem() {
    const dispatch=useDispatch()
    const productData=useSelector((state)=>state.bazar.productData);
  return (
    <div className="w-2/3 pr-10">
        <div className="w-full">
            <h2 className="font-titleFont text-2x1">shopping cart</h2>
        </div>
        <div>
            {
                productData.map((item)=>(
                    <div
                    key={item._id}
                    className="flex items-center justify-between gap-6 mt-6"
                    >
                     <div className="flex items-center gap-2"> 
                        <MdOutlineClose onClick={()=>dispatch(deleteItem(item._id))&toast.error("Item deleted")} className="text-x1 text-gray-600 hover:text-red-600 cursor-pointer duration-300"/>
                        <img
                         className="w-32 h-32 object-cover"
                         src={item.image}
                         alt="productImg"/>
                        </div>
                    <h2 className="w-52">{item.title}</h2>
                    <p className="w-10">{item.price}DT</p>
                    <p className='text-sm'>Quantity:      {item.quantity}</p>
                    <p className="w-14">{item.quantity *item.price}DT</p>
                
                    <ToastContainer
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>    
    
                        </div>
                        
                   
                ))
                }
                  <button onClick={
                    ()=> dispatch(resetCart())& toast.error("Cart is Clear")
                  } className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-500 duration-300" >Clear cart</button>
                  <Link to="/">
                   <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                    <span>
                       
                    </span>
                    go back to shopping
                    </button> 
                  </Link>
            
        </div>
    </div>
  )
}

export default CartItem