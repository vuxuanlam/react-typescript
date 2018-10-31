import * as React from "react";
import { connect } from "react-redux";
import CartList from "../components/cartApp/CartList"
import CartItem from "../components/cartApp/CartItem"
import CartResult from "../components/cartApp/CartResult"
import * as Message from "../constant/Message"

class CartContainer extends React.Component<any, any>{
    public render() {
        let { cart } = this.props;
        return (
            <CartList>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </CartList>
        )
    }
    showCartItem = (cart: any) => {
        let result = Message.MSG_CART_EMTY;
        if (cart.length > 0) {
            result = cart.map((item: any, index: any) => {
                return <CartItem key={index} item={item} />
            })
        }
        return result
    }
    showTotalAmount = (cart: any) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result
    }
}

const mapStateToProps = (state: any) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);