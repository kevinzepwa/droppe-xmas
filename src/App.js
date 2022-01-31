import React, {useState, useEffect} from "react"
import ApprovedCart from "./components/ApprovedCart"
import Carts from "./components/Carts"
import formatCurrency from "./util"
import ApprovedTable from "./components/ApprovedTable"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Modal from './components/Modal';
import useModal from './components/useModal'


export default function App(props) {

    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [approvedProducts, setApprovedProducts] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const {checkOut, visible} = useModal(() => {
      console.log(approvedProducts)
      const today = new Date().toISOString().slice(0, 10)

      const removedEmpties = approvedProducts.filter(n => n)
      const payloadList = approvedProducts.map(products => ({
        userId: products[0].userId,
        date: today,
        products: products
      }))
    
      try {
        payloadList.forEach((payload) => fetch('https://fakestoreapi.com/carts',{
          method:"POST",
          body:JSON.stringify(
              {
                  userId:5,
                  date: today,
                  products:[{productId:5,quantity:1},{productId:1,quantity:5}]
              }
          )
        })
            .then(res=>res.json())
            .then(json=> setSubmitted(true))
        )
      } catch (error) {
        console.log("error", error)
      }

    });
     
    const approveItem = (product, cartNumber) => {
      const approvedProductsCopy = [...approvedProducts]
       if (!approvedProductsCopy[cartNumber]) {
         approvedProductsCopy[cartNumber] = [product]
       }
       if (!approvedProductsCopy[cartNumber].includes(product)) {
         approvedProductsCopy[cartNumber].push(product)
       }
       setApprovedProducts(approvedProductsCopy)
       };

      
    const increaseQuantity = (product, cartCount, index) => {
      const approvedProductsCopy = [...approvedProducts]
      approvedProductsCopy[cartCount][index].quantity += 1
      setApprovedProducts(approvedProductsCopy)

    }
    
    const decreaseQuantity = (product, cartCount, index) => {
      const approvedProductsCopy = [...approvedProducts]
      if (approvedProductsCopy[cartCount][index].quantity > 0) {
      approvedProductsCopy[cartCount][index].quantity -= 1
      }
      if (approvedProductsCopy[cartCount][index].quantity <= 0) {
        removeItem(product, cartCount, index)
      }
      setApprovedProducts(approvedProductsCopy)

    }

     const removeItem = (product, cartCount, index) => {
       const approvedProductsCopy = [...approvedProducts]
       approvedProductsCopy[cartCount].splice(index, 1)
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
             product.category = newProduct.category
             product.description = newProduct.description
             product.image = newProduct.image
             product.price = newProduct.price
             product.id = newProduct.id
             product.rating = newProduct.rating
             product.title = newProduct.title
             product.userId = cart.userId

             return(product)
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
               increaseQuantity={increaseQuantity}            
               decreaseQuantity={decreaseQuantity}   
               checkOut={checkOut}         
                />
          
              <Modal visible={visible} checkOut={checkOut} />
          
          <Footer />
        </div>
      );
}
