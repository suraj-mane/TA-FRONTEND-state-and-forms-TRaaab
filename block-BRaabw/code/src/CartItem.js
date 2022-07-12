import React from 'react';

function CartItem(props) {
  return (
    <>
    {
        props.cart.map((ele) => (
            <div className='cart-item'>
          <img
            src={`/static/products/${ele.sku}_2.jpg`}
            alt=''
            width='80'
          />
          <div className='cart-item-details'>
            <p className='cart-item-name'>{ele.title}</p>
            <p>s | {ele.style}</p>
            <p>print Quantity: 1</p>
          </div>
          <div className='cart-price'>
            <p className='cart-cross' onClick={() =>props.delete(ele.id)}>x</p>
            <p className='price'>${ele.price}</p>
            <div>
              <Increment />
              <Decrement />
            </div>
          </div>
        </div>
        ))
    }
    </>
  );
}

function Increment() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
      />
    </svg>
  );
}
function Decrement() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M18 12H6'
      />
    </svg>
  );
}

export default CartItem;