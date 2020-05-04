import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { selectCurrentUser } from "../../redux/user/user.selector"
import { selectCartItmes, selectHidden } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from "reselect"
const Header = ({ currentUser, hidden }) => (

    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <a href={"mailto:" + "hi@myclothing.store"}>CONTACT</a>
            {/* <Link className="option" to="/shop">CONTACT</Link> */}
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className="option" to="/signin">SIGN IN
                    </Link>
            }
            <CartIcon />
        </div>

        {

            hidden ? null
                : <CartDropdown />
        }


    </div>
)


// //destructure the code 
// const mapStateToProps = ({
//     //user and cart are fomr the root-reducer
//     user: {currentUser}, cart: {hidden}}) =>({
//         currentUser,
//         hidden
//     })

// // method one 
// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectHidden(state)
//     })


//for mutiple selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

export default connect(mapStateToProps)(Header)