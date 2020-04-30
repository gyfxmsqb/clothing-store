import React from 'react'
import "./checkout-item.scss"
import { connect } from 'react-redux'
import { clearItemFromCart } from "../../redux/cart/cart.action"
import { addItem, removeItem } from '../../redux/cart/cart.action'


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => (

    // you can use this to destruct  { cartItem: {name, imageUlr, quantity, price} }
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={cartItem.imageUrl} />
        </div>
        <span className="name">{cartItem.name}</span>

        <span className="quantity">
            <div className="arrow"
                onClick={() => removeItem(cartItem)}

            >&#10094;</div>

            <span className="value">{cartItem.quantity}</span>

            <div className="arrow"
                onClick={() => addItem(cartItem)}
            >&#10095;</div>
        </span>

        <span className="price">{cartItem.price}</span>
        <div className="remove-button"
            onClick={() => clearItem(cartItem)}
        >
            &#10005;
        </div>
    </div>
)


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)) // import from action.js

})

export default connect(null, mapDispatchToProps)(CheckoutItem);