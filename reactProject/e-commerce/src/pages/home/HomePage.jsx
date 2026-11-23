import "./css/HomePage.css"
import { Header } from "../../components/Header"
// import products from "../products"
import axios from 'axios'
import { useEffect, useState } from "react"
import { ProductsGrid } from "./ProductsGrid"
import { useSearchParams } from "react-router"

export function HomePage({cartItems, getCartItems, addToCart}) {
    const [products, setProducts]= useState([]);
    const [searchParams]= useSearchParams();
    const search= searchParams.get('search');

    useEffect(()=>{
        const getHomeData= async()=>{
            let response;
            if(search?.trim()?.length> 0){
                response= await axios.get(`/api/products?search=${search}`);
            }
            else {
                response= await axios.get("/api/products");
            }
            setProducts(response.data)
            // console.log(response.data)
        }
        getHomeData()
    }, [search])
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <title>Ecommerce Project</title>
            <Header
                cartItems= {cartItems}
            />
            <div className="home-page">
                <ProductsGrid products={products} getCartItems={getCartItems} addToCart={addToCart}/>
            </div>
        </>
    )
}