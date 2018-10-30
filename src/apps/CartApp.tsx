import * as React from "react";
import Header from "../components/cartApp/Header";
import CartList from "../components/cartApp/CartList";
import ProductListContainer from "../containers/productListContainer";
import Message from "../components/cartApp/Message";
import Footer from "../components/cartApp/Footer";

export default class CartApp extends React.Component<any, any>{
    public render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductListContainer />
                        <Message />
                        <CartList />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}