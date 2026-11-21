import { DeliveryOptions } from "./DeliveryOptions"
import { CartItemDetails } from "./CartItemDetails"
import { DeliveryDate } from "../../components/DeliveryDate"

export function OrderSummary({cartItems, deliveryOptions, getCartItems}) {
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
                                getCartItems= {getCartItems}
                            />
                            <DeliveryOptions
                                cartItem= {cartItem}
                                deliveryOptions= {deliveryOptions}
                                getCartItems= {getCartItems}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}