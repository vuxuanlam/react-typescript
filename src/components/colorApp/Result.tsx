import * as React from "react";

class Result extends React.Component<any, any> {

    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        };
    }
    public render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Color : {this.props.color} - Size : {this.props.fontSize} </h3>
                </div>
                <div id="content" style={this.setStyle()}>
                    Panel content
                </div>
            </div>
        )

    }
}

export default Result;