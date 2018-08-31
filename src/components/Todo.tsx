import * as React from "react";

class Todo extends React.Component<any, any> {

    onDelete = () => {
        this.props.onDelete(this.props.lam.id)
    }
    public render() {
        // console.log(this.props.key);
        return <tr>
        <td>{this.props.lam.name}</td>
        <td>
            <button type="button" className="btn btn-danger" onClick = {this.onDelete}>Delete</button>
        </td>
    </tr>

    }
}

export default Todo;