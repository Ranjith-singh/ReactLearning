import { DeliveryOptions } from "./DeliveryOptions"
import { CartItemDetails } from "./CartItemDetails"
import { DeliveryDate } from "../../components/DeliveryDate"

export function OrderSummary({cartItems, deliveryOptions}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cartItems.map((cartItem) => {
                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <DeliveryDate
                            cartItem={cartItem}
                            deliveryOptions= {deliveryOptions}
                        />
                        <div className="cart-item-details-grid">
                            <CartItemDetails
                                cartItem= {cartItem}
                            />
                            <DeliveryOptions
                                cartItem= {cartItem}
                                deliveryOptions= {deliveryOptions}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}