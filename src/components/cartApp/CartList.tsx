import * as React from "react";
import CartResult from "../cartApp/CartResult";
import CartItem from "../cartApp/CartItem";

export default class CartList extends React.Component<any, any>{
    public render() {
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartResult />
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}