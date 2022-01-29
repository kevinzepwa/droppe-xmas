import React from 'react'
import formatCurrency from '../util'

export default function Carts(props) {  
  return (<div>
    {props.products.length > 1 ? (
      <div className='cart-title'>
        You have {props.products.length} products in this cart{"."}
      </div>) :
      (<div className='cart-title'>
        You have {props.products.length} product in this cart{"."}
    </div>)
    }

    <ul className='products'>
      {props.products.map((product) => (
        <li className="product" key={product.id}>              
            <img src={product.image} alt={product.title}></img>
            <div className="product-title">
              {product.title}
            </div>
            <div className="product-details">
              <div className="price">{formatCurrency(product.price)}</div>
              <div className="quantity">Q. {product.quantity}</div>
              <div className="product-details fa fa-star checked"> . {product.rating.rate}</div>
            </div>
            <button className="button"
              onClick={() => props.approveItem(product, props.cartNumber)}>
                Approve
            </button >
        </li>
      ))}
    </ul>
  </div>);
}

