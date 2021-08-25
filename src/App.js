import React from 'react';
import { useState , useEffect } from 'react';
import {commerce} from './lib/commerce.js';
import {Products , Navbar , Cart} from './Components'; 
import { BrowserRouter as Router , Switch , Route  } from "react-router-dom";

export default function App() {
    const [products , setProducts] = useState([]);
    const [cart , setCart]=useState ({});
    const fetchProducts = async () => {
        try {
            const {data} = await commerce.products.list();
             console.log(data);
            setProducts(data);
        }
      catch(err){
            console.log(err.stack)
      }
    }
      const fetchCart = async () => {
          setCart( await commerce.cart.retrieve())
      }
      const handleAddToCart = async (productId,quantity) => {
          const item =await commerce.cart.add(productId, quantity);
          setCart(item.cart);
          console.log(cart)
      }
      const handleUpdateCartQty = async(productId,quantity) => {
          const response = await commerce.cart.update(productId,{quantity})
          setCart(response.cart);
      }
      const handleRemoveFromCart = async (productId) => {
          const response = await commerce.cart.remove(productId)
          setCart(response.cart)
      }
      const handleEmptyCart = async () => {
          const {cart} = await commerce.cart.empty()
          setCart(cart) 
      }
 
   useEffect (()=> {
    fetchProducts();
    fetchCart();

    }, [] )

    console.log(products);
    console.log(cart)
    return (
       <Router>
            <div>
             <Navbar totalItems={cart.total_items}/>
            <Switch>
                <Route exact path="/">
                        <Products products={products}  onAddToCart={handleAddToCart} />
                 </Route>

                 
                 <Route exact path="/cart">
                        <Cart
                        cart={cart}
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart={handleEmptyCart}
                       
                         />
                 </Route>
                
                
            </Switch>
            </div>
        </Router>
    )
}
