import axios from "axios";
import { moneyFormat } from "../../utils/Money";
import checkMark from '../../assets/icons/checkmark.png'
import { useEffect, useState } from "react";
import './css/Product.css'

export function Product({product, getCartItems, addToCart}) {
    const [quantity, setQuantity]= useState(1);
    const [showAdded, setShowAdded]= useState(false);
    function quantityChange(event) {
        // console.log(event.target.value);
        const quantityValue = Number(event.target.value);
        setQuantity(quantityValue);
    }
    useEffect(()=>{
        const addedTimeOut= setTimeout(()=>{
            setShowAdded(false);
        }, 1000);
        return ()=> clearTimeout(addedTimeOut);
    },[showAdded])
    return (
        <div className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                    src={product.image} />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                    {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                {moneyFormat(product.priceCents)}
            </div>

            <div className="product-quantity-container">
                <select value={quantity} onChange={quantityChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div
                className="added-to-cart"
                style={{opacity: showAdded? 1: 0}}
            >
                <img src={checkMark} />
                Added
            </div>

            <button
                className="add-to-cart-button button-primary"
                onClick={()=> {
                        addToCart(product.id, quantity);
                        setShowAdded(true);
                    }
                }
            >
                Add to Cart
            </button>
        </div>
    )
}