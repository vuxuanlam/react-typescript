import * as React from "react";

export default class Message extends React.Component<any, any>{
    public render() {
        return (
            <h3>
                <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
            </h3>
        )
    }
}