import React, {useContext} from 'react';
import {CartContext} from '../Global/CartContext';

const Cart =()=> {
	const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
  return (
    <div className="w-auto">
    <div className="container pt-3">
        <div className="body">
      	  <h2>Order Cart</h2>
          <div className="row">
          <div className="col-md-8">
          {shoppingCart.length > 0 ?
          shoppingCart.map(cart => (
          <div className="cartDiv  mb-3" key={cart.id}>
              <span className="cart"><img src={cart.image} alt="not found" className="img-fluid"/></span>
              <span className="cart-product-name text-center">{cart.food}</span>
              <span className="cart-product-price text-center">${cart.newprice}</span>
              <span className="inc" onClick={()=> dispatch({type:'INC', id: cart.id, cart})}><i className="fas fa-plus"></i></span>
              <span className="product-quantity">{cart.qty}</span>
              <span className="dec" onClick={()=> dispatch({type:'DEC', id: cart.id, cart})}><i className="fas fa-minus"></i></span>
              <span className="product-total-price">${cart.newprice * cart.qty}.00</span>
              <span className="delete" onClick={()=> dispatch({type:'DELETE', id: cart.id, cart})}><i className="fas fa-trash-alt"></i></span>

          </div>
          ))
          : 'Sorry your Cart is Currently Empty'}
          </div>
              <div className='col-md-4'>
              {shoppingCart.length > 0 ? <div className="cart-summary">
                <div className="summary">
                <h3 className="pb-2">Cart Summary</h3>
                <div className="total-item d-flex justify-content-between">
                  <div className="items">Total Item</div>
                  <div className="items-count">{qty}</div>
                </div>

                <div className='total-price-section d-flex justify-content-between'>
                  <div className="just-title">Total Price</div>
                  <div className="item-price">${totalPrice}.00</div>
                </div>

                </div>
              </div> : ''}
              </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Cart;
