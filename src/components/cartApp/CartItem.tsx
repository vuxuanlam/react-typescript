import * as React from "react";
import * as Message from "../../constant/Message" 

export default class CartItem extends React.Component<any, any>{
    showSubTotal = (price:any,quantity:any) => {
        return price* quantity
    }
    onDelete = (product:any) => {
        let {onDeleteProduct} = this.props;
        onDeleteProduct(product);
        this.props.onChangeMessage(Message.MSG_DELETE_TO_CART_SUCCESS);
    }

    onUpdateQuantity = (product:any, quantity:any) => {
         if(quantity>0){
             let {onUpdateQuantity, onChangeMessage} = this.props
             this.setState({
             quantity:quantity
         });
          onUpdateQuantity(product, quantity);
          onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
        }
        //  console.log(this.state);
         
    }

    public render() {
        let {item} = this.props;
        let {quantity} = item;
        return (
            <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt={item.product.image}className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light" onClick = { () => this.onUpdateQuantity(item.product, quantity-1) }>
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light" onClick = { () => this.onUpdateQuantity(item.product, quantity+1) }>
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item" onClick = {()=>this.onDelete(item.product)}>
                    Remove
                </button>
            </td>
        </tr>
        )
    }
}