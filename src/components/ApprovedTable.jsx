import React, {useState, useEffect} from 'react'
import formatCurrency , {getSingleProductQuantity, getTotalPrice, getTotalCartProductQuantity} from "../util"

export default function ApprovedTable(props) {
    const { approvedProducts, cartCount, removeItem } = props

    const totalPrice = getTotalPrice(approvedProducts, cartCount)

    const totalCartProductQuantity = getTotalCartProductQuantity(approvedProducts, cartCount)

    const singleProductQuantity = getSingleProductQuantity(approvedProducts, cartCount)
  

    return (<div className='approval-table'>
        <table className="table">
        <tr><th className="th">Item</th>
        <th className="th">Price</th>
        <th className="th">Qnty</th>
        <th className="th">Subtotal</th>
        <th className="th">Remove</th></tr>
        { approvedProducts[cartCount].map((product, index) => (
            <tr className="table-rows">
        <td>                
        {<div>
            <img className="table-image" src={product.image} alt={product.title}></img>
            </div>}</td>
        <td className="th">{formatCurrency(product.price)}</td>
        <td className="th">{product.quantity}<div className='triangles'>
                <span className="increase-triangle" onClick={() => props.increaseQuantity(product, cartCount, index)}></span>
                <span className="decrease-triangle" onClick={() => props.decreaseQuantity(product, cartCount, index)}></span>
            </div>
        </td>
        <td className="th">{
            product.quantity === 1 ? formatCurrency(product.price * product.quantity) : 
            product.quantity === 2 ? formatCurrency(product.price * 0.80 * product.quantity) : 
            formatCurrency(product.price * 0.70 * product.quantity) 
            }
        </td>
        <td className="th">
            <button className="remove-button" onClick={() => props.removeItem(product, cartCount, index)}
            >
            &times;
            </button></td>
            </tr>))}
        </table>
        <div className='cart-bottom'>
            <div className='cart-bottom-price'><span>You have {totalCartProductQuantity} items in this cart.</span></div>
            <div className='cart-bottom-price'><span>Total for Child {cartCount + 1} is: </span>
            {formatCurrency(totalPrice)}</div>
            <div className='cart-trees'>&#127876; &#127876; &#127876;</div>
        </div>
    </div>
    );
}
