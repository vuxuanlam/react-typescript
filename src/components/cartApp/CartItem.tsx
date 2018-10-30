import * as React from "react";

export default class CartItem extends React.Component<any, any>{
    showSubTotal = (price:any,quantity:any) => {
        return price* quantity
    }
    public render() {
        let {item} = this.props;
        console.log(item);
        
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
            <td>{item.product.image}$</td>
            <td className="center-on-small-only">
                <span className="qty">{item.product.quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{this.showSubTotal(item.product.price, item.product.quantity)}$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item">
                    X
                </button>
            </td>
        </tr>
        )
    }
}