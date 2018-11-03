import * as React from "react";
import { connect } from "react-redux";
import CartList from "../components/cartApp/CartList"
import CartItem from "../components/cartApp/CartItem"
import CartResult from "../components/cartApp/CartResult"
import * as Message from "../constant/Message"
import { removeProduct, changeMessage, updateQuantity } from "../action/index"

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
        let { onDeleteProduct, onChangeMessage, onUpdateQuantity } = this.props
        let result = <tr><td>{Message.MSG_CART_EMTY}</td></tr>
        if (cart.length > 0) {
            result = cart.map((item: any, index: any) => {
                return <CartItem key={index} item={item} onDeleteProduct={onDeleteProduct} onChangeMessage={onChangeMessage} onUpdateQuantity={onUpdateQuantity} />
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
        onDeleteProduct: (product: any) => {
            dispatch(removeProduct(product));
        },
        onChangeMessage: (message: any) => {
            dispatch(changeMessage(message));
        },
        onUpdateQuantity: (product: any, quantity: any) => {
            dispatch(updateQuantity(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);