import "./css/Tracking.css"
import { Header } from "../components/Header"
import { Link } from "react-router"
import { useParams } from "react-router"
import { Fragment, useEffect, useState } from "react"
import axios from 'axios'
import dayjs from "dayjs"

export function Tracking({ cartItems }) {
    const params = useParams()
    // console.log(params);
    const { orderId, productId } = params;
    const [order, setOrder] = useState(null);
    useEffect(() => {
        const getOrder = async () => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        }
        getOrder();
    }, [orderId]);

    if (!order) {
        return null;
    }
    const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.productId === productId;
    });

    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedInMs = dayjs().valueOf()- order.orderTimeMs;
    let deliveryProgress = (timePassedInMs < totalDeliveryTimeMs)
        ? (100 * timePassedInMs / totalDeliveryTimeMs)
        : 100;
    // console.log(orderProduct.estimatedDeliveryTimeMs,order.orderTimeMs);
    return (
        <>
            <title>Tracking</title>
            <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />

            <Header cartItems={cartItems} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <a className="back-to-orders-link link-primary" href="/orders">
                        View all orders
                    </a>

                    <div className="delivery-date">
                        {(deliveryProgress>=100)?'Delivered':'Arriving'} on {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>

                    <div className="product-info">
                        {orderProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${(deliveryProgress< 33) && 'current-status'}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${(deliveryProgress>= 33 && deliveryProgress<100) && 'current-status'}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${(deliveryProgress>=100) && 'current-status'}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div
                            className="progress-bar"
                            style= {{width: `${deliveryProgress}%`}}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    )
}