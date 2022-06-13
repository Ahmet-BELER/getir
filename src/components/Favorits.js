
import {useState, useEffect} from "react";
import Products from "../api/products.json"
import ProductItem from "./ui/ProductItem"
export default function Favorites() {

    const [Product , setProduct] = useState([])
    useEffect(() =>{
    setProduct(Products)
},[]) 
    return (
        <div > 
 <h3 className="container mx-auto text-11 font-semibold mb-13 px-6 py-4 md:px-0">Favorites</h3>
 <div className="grid grid-cols-8 gap-1 bg-white rounded-lg overflow-hidden">
     {Product.length  &&  Product.map((index , product) => <ProductItem key={index} product={product} />)}
 </div>


        </div>
    )
}








