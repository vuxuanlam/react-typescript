import * as React from "react";
import Product from "../cartApp/Product";
import { connect } from "react-redux";

class ProductList extends React.Component<any, any>{
    showProduct = (productList: any) => {
        let result: any = null;
        if (productList.length > 0) {
            result = productList.map((product: any, index: any) => {
                return <Product key={index} product={product} />
            })
        }
        return result;
    }

    public render() {
        let { productList } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.showProduct(productList)}
                </div>
            </section>
        )
    }

}
const mapStateToProps = (state: any) => {
    return {
        productList: state.productList
    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);