import dayjs from "dayjs"
import { moneyFormat } from "../../utils/Money"

export function DeliveryOptions(props) {
    const {cartItem, deliveryOptions}= props
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                // console.log(deliveryOption);
                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input type="radio"
                            checked={cartItem.deliveryOptionId === deliveryOption.id}
                            className="delivery-option-input"
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