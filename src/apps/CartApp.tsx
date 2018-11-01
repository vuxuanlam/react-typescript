import * as React from "react";
import Header from "../components/cartApp/Header";
import ProductListContainer from "../containers/productListContainer";
import CartContainer from "../containers/cartContainer";
import MessageContainer from "../containers/messageContainer";
import Footer from "../components/cartApp/Footer";

export default class CartApp extends React.Component<any, any>{
    public render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductListContainer />
                        <MessageContainer />
                        <CartContainer />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}