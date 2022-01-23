import React, {useState, useEffect} from "react"
import Products from "./components/Products";

export default function App() {

    const [allProducts, setAllProducts] = React.useState([])
            
    // side effects using the useEffect hook
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(items => setAllProducts(items))
    }, [])
    
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">Droppe X-mas</a> 
        </header> 
        <main>
          <div className="content">
            <div className="main">
              <Products products={allProducts}></Products>
            </div>
            <div className="sidebar">
              Cart items
            </div>
          </div>
        </main>
        <footer>
          brewed by devKev
        </footer>
      </div>
    )
}