import * as React from "react";
import Product from "../cartApp/Product";

export default class ProductList extends React.Component<any, any>{
    public render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        )
    }
}