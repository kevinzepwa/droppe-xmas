import React, {useState, useEffect} from "react"
import ApprovedCart from "./components/ApprovedCart"
import Carts from "./components/Carts"
import formatCurrency from "./util"
import ApprovedTable from "./components/ApprovedTable"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"

export default function App(props) {

    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [approvedProducts, setApprovedProducts] = useState([])
    const [sumValue, setSumValue] = useState([0])
  
     
    const approveItem = (product, cartNumber) => {
      const approvedProductsCopy = [...approvedProducts]
       if (!approvedProductsCopy[cartNumber]) {
         approvedProductsCopy[cartNumber] = [product]
       }
       if (!approvedProductsCopy[cartNumber].includes(product)) {
         approvedProductsCopy[cartNumber].push(product)
       }
       setApprovedProducts(approvedProductsCopy)
       //console.log(approvedProducts[cartNumber])
       };
     
     const removeItem = (product, index) => {
       const approvedProductsCopy = [...approvedProducts]
       approvedProductsCopy[0].splice(index, 1)
       setApprovedProducts(approvedProductsCopy)
     };
       
     // side effects using the useEffect hook   
     // IF CART PRODUCT ID ==== PRODUCT ID => RENDER ITEM IN CART USING PRODUCT ID
     useEffect(() => {
       fetch("https://fakestoreapi.com/products")
           .then(res => res.json())
           .then(items => setProducts(items))
     
       fetch("https://fakestoreapi.com/carts?limit=5")
           .then(res => res.json())
           .then(items => setCarts(items))
     }, []);
             
     useEffect(() => {
       if (products && carts) {
         // console.log(">>.", products, carts)
         const newCart = carts.map((cart) => {
           return(cart.products.map((product) => {
             const newProduct = products.find(innerProduct => innerProduct.id === product.productId)
             newProduct.quantity = product.quantity
             return(newProduct)
           }))
         
         })
         setCartProducts(newCart)
       }
       
     }, [products]);
      
     return (
       <div className="grid-container">
         <Header />
         <Main products={products} 
               approveItem={approveItem} 
               cartItems={cartItems} 
               cartNumber={0}
               cartProducts={cartProducts}
               Carts={Carts}
               approvedProducts={approvedProducts}
               ApprovedTable={ApprovedTable}
               removeItem={removeItem}              
                />
          <Footer />
        </div>
      );
}
