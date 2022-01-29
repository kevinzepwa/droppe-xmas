import React, {useState} from 'react'
import formatCurrency from "../util"

export default function ApprovedTable(props) {
    const { approvedProducts, cartCount, removeItem } = props

    const totalPrice = approvedProducts[cartCount].reduce( 
        (a, product) => 
        a + product.price * product.quantity, 0)

    const [increase, setIncrease] = useState()
    const [decrease, setDecrease] = useState()

    // increase and decrease callback functions

    const rise = () => { setIncrease(prevValue => prevValue + 1) }
    const fall = () => { setDecrease(prevValue => prevValue - 1) }

    return (<div>
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
                <span class="increase-triangle" onClick={() => fall(product.quantity, index)} ></span>
                <span class="decrease-triangle" onClick={() => rise(product.quantity, index)} ></span>
            </div>
        </td>
        <td className="th">{
            product.quantity === 1 ? formatCurrency(product.price * product.quantity) : 
            product.quantity === 2 ? formatCurrency(product.price * 0.8 *product.quantity) : 
            formatCurrency(product.price * 0.7 *product.quantity) 
            }
        </td>
        <td className="th">
            <button className="remove-button" onClick={() => props.removeItem(product, index)}
            >
            &times;
            </button></td>
            </tr>))}
        </table>
        <div className='cart-bottom'>
            <div className='cart-bottom-price'><span>Total for Child {cartCount + 1} is: </span>
            {formatCurrency(totalPrice)}</div>
            <div className='cart-trees'>&#127876; &#127876; &#127876;</div>
        </div>
    </div>
    );
}
