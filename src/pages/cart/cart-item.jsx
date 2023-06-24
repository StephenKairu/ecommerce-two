import React from 'react'

export const CartItem = (props) => {
const {id, productName, price, productImage} = props.data;

  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p> 
        </div>
        {/* <button className='addToCartBttn' onClick={() => addToCart(id)}>
          Add To Cart{cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button> */}
    </div>
  )
}
