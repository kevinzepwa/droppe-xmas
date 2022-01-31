import React from 'react'
import ApprovedCart from './ApprovedCart'
import ApprovedTable from './ApprovedTable';
import Carts from './Carts'
import Checkoutbutton from './Checkbutton';
import Checkoutpage from './Checkoutpage';
import Loading from './Loading'

export default function Main(props) {
  
  return (<div>
      { props.products.length ? (<main>
          <div className="content">
            <div className="main">              
              {props.cartProducts.map((products, index) => 
              (<Carts products={products} approveItem={props.approveItem} 
                                          cartItems={props.cartItems} cartNumber={index} 
                                          cartProducts={props.cartProducts} />))}
            </div>
            <div className="sidebar">
              <div>
                <ApprovedCart products={props.products} 
                              approveItem={props.approveItem} 
                              cartItems={props.cartItems} 
                              cartNumber={props.cartNumber} />

              { props.approvedProducts?.length ?
                  props.approvedProducts.map((productsList, index) => 
                  (<ApprovedTable approvedProducts={props.approvedProducts} 
                                  cartCount={index} 
                                  removeItem={props.removeItem}
                                  increaseQuantity={props.increaseQuantity}
                                  decreaseQuantity={props.decreaseQuantity}
                                  />)) :
                                  "No Products in Cart"
                  }
              </div>
              <Checkoutbutton checkOut={props.checkOut}/>
            </div>
          </div>
          <div className="total-title">
              Total: {props.approvedProducts.length ? props.totalPrice : 0 }
        </div>
        </main>) : 
        <Loading />        
      }
  </div>);
}
