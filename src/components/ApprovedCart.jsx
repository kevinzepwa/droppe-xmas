import React from 'react'
import formatCurrency from '../util'

export default function ApprovedCart(props) {
    const cartItems = []

    return (<div>
        <div>
          <div className='approved-cart-header'>
            Approved Products
          </div>        
          <div className="cart">
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div className="product">
                    <a
                      href={"#" + item._id.id[3].image}>
                      <img src={item.image} alt={item.title}></img>
                    </a>
                    </div>
                   <div>
                      <div>{item.title}</div>
                      <div>
                        {formatCurrency(item.price)} <div className="remove">x</div>{item.count}{" "}
                        <button
                          onClick={() => props.removeFromCart(item)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
          </div>
        </div>    
    </div>);
}
