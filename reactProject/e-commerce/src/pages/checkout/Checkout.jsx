import { CheckoutHeader } from './CheckoutHeader'
import './css/Checkout.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'

export default function Checkout({ cartItems }) {
    const [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary]= useState(null);
    useEffect(()=>{
        const fetchCheckoutData= async()=>{
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data)

            response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data)
        }

        fetchCheckoutData();
    })
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
                    />

                    {paymentSummary && (
                        <PaymentSummary
                            paymentSummary={paymentSummary}
                        />
                    )}
                </div>
            </div>
        </>
    )
}