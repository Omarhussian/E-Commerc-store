import React from 'react';
import { useState , useEffect } from 'react';
import {commerce} from './lib/commerce';
import {Products , Navbar} from './Components'; 
export default function App() {

    const [products , setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const {data} = await commerce.products.list();
            // console.log(data);
            setProducts(data);
        }
      catch(err){
            console.log(err.stack)
      }
 }
   useEffect (()=> {
    fetchProducts();

    }, [] )

    console.log(products);

    return (
       
        <div>
            <Navbar />
           <Products />

        </div>
    )
}
