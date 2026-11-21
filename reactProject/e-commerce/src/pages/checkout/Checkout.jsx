import { CheckoutHeader } from './CheckoutHeader'
import './css/Checkout.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'

export default function Checkout({ cartItems, getCartItems }) {
    const [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary]= useState(null);
    let response;
    async function getPaymentSummary(){
        response = await axios.get('/api/payment-summary');
        setPaymentSummary(response.data);
    }
    const getDeliveryOptions= async()=> {
        response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
        setDeliveryOptions(response.data);
    }
    const fetchCheckoutData= async()=>{
        getDeliveryOptions();
        getPaymentSummary();
    }
    useEffect(()=>{
        fetchCheckoutData();
    }, [])
    useEffect(()=> {
        getPaymentSummary()
    }, [cartItems])
    // useEffect(() => {
    //     axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
    //         .then((response)=>{
    //             setDeliveryOptions(response.data)
    //         })
    //     axios.get('/api/payment-summary')
    //         .then((response)=>{
    //             setPaymentSummary(response.data)
    //         })
    // }, [])
    // console.log(paymentSummary);
    // console.log(deliveryOptions);
    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
            <CheckoutHeader
                cartItems= {cartItems}
            />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary
                        cartItems={cartItems}
                        deliveryOptions={deliveryOptions}
                        getCartItems= {getCartItems}
                    />

                    {paymentSummary && (
                        <PaymentSummary
                            paymentSummary={paymentSummary}
                            getCartItems={getCartItems}
                        />
                    )}
                </div>
            </div>
        </>
    )
}