
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
function Cart() {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState('');
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
       setPayNow(true)
      console.log('Proceeding to checkout for user:', userInfo);
    } else {
      toast.error("please sign in to checkout")
      console.log('User not logged in. Redirecting to login...');
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#d2c6c6] py-6 px-4">
          <div>
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{' '}
              <span className="font-titleFont font-bold text-lg">{totalAmt} Dt</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping <span>{/* Shipping cost or details */}</span>
            </p>
          </div>
          <p>
            Total <span className="text-x1 font-bold">{totalAmt} Dt</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-200"
          >
            Proceed to Checkout
          </button>
          {
            payNow && (<div>
              <StripeCheckout 
              stripeKey="pk_test_51OIueRFpJCdRhGdytThPzHTm1lHLU7UPuCZMrj0FhIbrvSpwz42g0JDkrBFrHgSXBmkUJ3Xm4CiA4dMe6xrvOPFO0031GdrvSV"
              name="Scentcraft"
              amount={totalAmt*100}
              label="pay to Scent"
              description={`Your payment amount is DT${totalAmt}`}
              email={userInfo.email}/>
              </div>
          )}
           
         
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
        theme="light"
      />
    </div>
  );
}

export default Cart;