import * as React from "react";

class Result extends React.Component<any, any> {

    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color
        };
    }
    public render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                </div>
                <div id="content" className="panel-body" style={this.setStyle()}>
                    Panel content
                </div>
            </div>
        )

    }
}

export default Result;