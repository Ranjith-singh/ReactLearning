import "./css/HomePage.css"
import { Header } from "../../components/Header"
// import products from "../products"
import axios from 'axios'
import { useEffect, useState } from "react"
import { ProductsGrid } from "./ProductsGrid"

export function HomePage({cartItems}) {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        const getHomeData= async()=>{
            const response= await axios.get("/api/products");
            setProducts(response.data)
        }

        getHomeData()
    }, [])
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <title>Ecommerce Project</title>
            <Header
                cartItems= {cartItems}
            />
            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    )
}