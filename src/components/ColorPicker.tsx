import * as React from "react";

class ColorPicker extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            colors: ["red", "yellow", "green", "blue"]
        }
    }

    setActiveColor = (color: any) => {
        this.props.onReceiveColor(color);
    }

    showColor = (color: any) => {
        return {
            backgroundColor: color
        };
    }
    public render() {
        var eleColor = this.state.colors.map((color: any, index: any) => {
            return <span
                id = "color-picker"
                key={index}
                style={this.showColor(color)}
                className={this.props.color === color ? 'active' : ''}
                onClick={() => this.setActiveColor(color)}
            >
            </span>
        })
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    {eleColor}
                    <hr />
                </div>
            </div>
        )

    }
}

export default ColorPicker;