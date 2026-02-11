import './css/CheckoutHeader.css'
import logo from "../../assets/logo.png"
import mobileLogo from "../../assets/mobile-logo.png"
import checkoutLockIcon from '../../assets/icons/checkout-lock-icon.png'
import { Link } from 'react-router'

export function CheckoutHeader({cartItems}){
    return(
        <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src= {logo} />
                            <img className="mobile-logo" src= {mobileLogo} />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">{
                                cartItems.reduce((totalCart, cartItem)=>{
                                return totalCart+ cartItem.quantity},0)
                            } items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src= {checkoutLockIcon} />
                    </div>
                </div>
            </div>
        </>
    )
}