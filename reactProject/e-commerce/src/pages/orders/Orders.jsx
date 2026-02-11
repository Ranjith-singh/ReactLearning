import "./css/Orders.css"
import { Header } from "../../components/Header"
import { useEffect, useState } from "react"
import axios from 'axios'
import { OrdersGrid } from "./OrdersGrid"

export function Orders({ cartItems }) {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const getOrders= async()=>{
            const response= await axios.get('api/orders?expand=products')
            setOrders(response.data)
        }
        getOrders()
    }, [])
    // useEffect(() => {
    //     axios.get('api/orders?expand=products')
    //         .then((response) => {
    //             setOrders(response.data);
    //         })
    // }, [])
    // console.log(orders);
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
            <title>Orders</title>
            <Header cartItems={cartItems} />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrdersGrid
                    orders={orders}
                />
            </div>
        </>
    )
}