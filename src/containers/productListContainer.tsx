import * as React from "react";
import { connect } from "react-redux";
import ProductList from "../components/cartApp/ProductList"
import Product from "../components/cartApp/Product"

class ProductListContainer extends React.Component<any, any>{
    public render() {
        let { productList } = this.props;
        return (
            <ProductList>
                {this.showProduct(productList)}
            </ProductList>
        )
    }
    showProduct = (productList: any) => {
        let result: any = null;
        if (productList.length > 0) {
            result = productList.map((product: any, index: any) => {
                return <Product key={index} product={product} />
            })
        }
        return result;
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);