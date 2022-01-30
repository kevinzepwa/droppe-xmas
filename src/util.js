export default function formatCurrency(num) {
    return "Ks. " + Number(num.toFixed(1)).toLocaleString() + " ";
  }
  
export const getTotalPrice = (approvedProducts, cartCount) =>  approvedProducts[cartCount].reduce( 
    (a, product) => 
    a + product.price * product.quantity, 0)

export const getTotalCartProductQuantity = (approvedProducts, cartCount) => approvedProducts[cartCount].reduce(
(a, product) => 
a + product.quantity, 0)

export const getSingleProductQuantity = (approvedProducts, cartCount) => approvedProducts[cartCount].reduce(
  (a, product) => 
  product.quantity, 0)