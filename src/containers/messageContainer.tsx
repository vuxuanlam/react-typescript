import * as React from "react";
import { connect } from "react-redux";
import CartList from "../components/cartApp/CartList"
import CartItem from "../components/cartApp/CartItem"
import CartResult from "../components/cartApp/CartResult"
import Message from "../components/cartApp/Message"

class MessageContainer extends React.Component<any, any>{
    public render() {
        var { message } = this.props;
        return (
            <Message message={message} />
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);