import axios from "axios"
import { moneyFormat } from "../../utils/Money"
import './css/CartItemDetails.css'
import { useRef, useState } from "react"

export function CartItemDetails({ cartItem, getCartItems }) {
    const [quantity, setQuantity]= useState(cartItem.quantity);
    // const quantityInput= useRef();
    const deleteCartItem= async()=> {
        // console.log(cartItem);
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await getCartItems();
    }
    const UpdateCartItems= async()=> {
        // console.log(quantityInput.current?.value);
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: Number(quantity)
        })
        await getCartItems();
    }
    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {moneyFormat(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <input
                        type="number"
                        className="quantity-input"
                        value={quantity}
                        onChange={(event)=>{
                            // console.log(event.target);
                            setQuantity(event.target.value);
                            // console.log(quantity);
                        }}
                        onKeyDown={(event)=>{
                            if(event.key == 'Enter'){
                                setQuantity(event.target.value);
                                UpdateCartItems();
                            }
                            else if(event.key == 'Escape'){
                                setQuantity(cartItem.quantity);
                            }
                        }}
                    />
                    <span>
                        Quantity: <span className="quantity-label">
                            {cartItem.quantity}
                        </span>
                    </span>
                    <span
                        className="update-quantity-link link-primary"
                        onClick={UpdateCartItems}
                    >
                        Update
                    </span>
                    <span
                        className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}
                    >
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}