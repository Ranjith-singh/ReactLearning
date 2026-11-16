import axios from "axios";
import { moneyFormat } from "../../utils/Money";
import checkMark from '../../assets/icons/checkmark.png'
import { useEffect, useState } from "react";
import './css/Product.css'
import { Fragment } from "react";

export function Product({product, getCartItems}) {
    const [quantity, setQuantity]= useState(1);
    const [showAdded, setShowAdded]= useState(false);
    function quantityChange(event) {
        // console.log(event.target.value);
        const quantityValue = Number(event.target.value);
        setQuantity(quantityValue);
    }
    const addToCart= async() => {
        await axios.post(`/api/cart-items`, {
            productId: product.id,
            quantity
        });
        setShowAdded(true);
        getCartItems();
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
                {showAdded && (
                    <Fragment>
                        Added
                    </Fragment>
                )
                }
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
                <img src={checkMark} />
                Added
            </div>

            <button
                className="add-to-cart-button button-primary"
                onClick={addToCart}
            >
                Add to Cart
            </button>
        </div>
    )
}