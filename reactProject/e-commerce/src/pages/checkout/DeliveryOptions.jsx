import dayjs from "dayjs"
import { moneyFormat } from "../../utils/Money"
import axios from "axios"
import { useRef } from "react"

export function DeliveryOptions(props) {
    const {cartItem, deliveryOptions, getCartItems}= props
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                // console.log(deliveryOption);
                // console.log(cartItem);
                const inputRef= useRef(null);
                const UpdateDeliveryOptions= async()=>{
                    // console.log("update delivery options");
                    // console.log(inputRef);
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: deliveryOption.id
                    });
                    await getCartItems();
                }
                return (
                    <div
                        key={deliveryOption.id}
                        className="delivery-option"
                        onClick={UpdateDeliveryOptions}
                    >
                        <input type="radio"
                            ref={inputRef}
                            onChange={()=>{}}
                            checked={deliveryOption.id === cartItem.deliveryOptionId}
                            className="delivery-option-input focus:outline-none"
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {(deliveryOption.priceCents > 0)
                                    ? `${moneyFormat(deliveryOption.priceCents)} - Shipping`
                                    : 'Free Shipping'}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}