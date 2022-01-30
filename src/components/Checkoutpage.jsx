import React from 'react';
import formatCurrency , {getSingleProductQuantity, getTotalPrice, getTotalCartProductQuantity} from "../util"


function Checkoutpage(props) {

  const {approvedProducts} = props


  return (<div className='checkout'> 
    <table className='checkout-table'>
    <tr>
      Check Out
    </tr>  
    <tr>
      <th>Carts</th>
      <th>{props.totalCartProductQuantity}</th>
      <th>Cart Total</th>
    </tr>
    {
      props.approvedProducts.map((products, index) => (
        <tr>
          <td>Cart {index+1}</td>
          <td>{getTotalCartProductQuantity(approvedProducts, index)}</td>
          <td>{getTotalPrice(approvedProducts, index)}</td>
        </tr>
      ))
    }
    <tr>
      <td>Total</td>
      <td></td>
      <td>{approvedProducts.reduce((sum, products, index) => 
        sum + getTotalPrice(approvedProducts, index)
      ,0)}</td>
    </tr>
  </table>
</div>);
}

export default Checkoutpage;


