import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductsCard = ({product}) => {
const dispatch=useDispatch();    
const navigate=useNavigate();    
const _id=product.title;
const idString=(_id)=>{
    return String(_id).toLowerCase().split(" ").join("");

}
const rootId=idString(_id);

const handleDetails=()=>{
    navigate(`/product/${rootId}`,{
        state:{
            item:product,
        }
    })
}
    return (
    <div className="group">
        <div onClick={handleDetails} className="w-full h-96 cursor-pointer overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-110 duration-500" src={product.image} alt="productImg"/>
        </div>
        <div className="w-full border-1[1px] px-2 py-4">
      <div className="flex justify-between items-center">
      <div className="flex gap-2">
            <h2 className="font-titleFont text-base font-bold">{product.title}</h2>
          
        </div>
        <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm ">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
            <p className="font-semibold">{product.price}Dt</p>
            </div>
            <p onClick={()=>dispatch(addToCart({
                _id:product._id,
                title:product.title,
                image:product.image,
                price:product.price,
                quantity:1,
                
            }) ) & toast.success(`${product.title} is added`)} className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">add to cart<span><BsArrowRight/></span> </p>
        </div>
      </div>
        <div>
            <p>{product.category}</p>
        </div>
        <div>
            {product.isNew &&
            <p>Sale</p>
            }
        </div>
        </div>
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
  )
}

export default ProductsCard