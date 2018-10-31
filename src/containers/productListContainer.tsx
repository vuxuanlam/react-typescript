import * as React from "react";
import { connect } from "react-redux";
import ProductList from "../components/cartApp/ProductList"
import Product from "../components/cartApp/Product"
import { actAddToCart } from "../action/index"

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
        var { onAddToCart } = this.props
        if (productList.length > 0) {
            result = productList.map((product: any, index: any) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} />
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
        onAddToCart: (product: any) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);