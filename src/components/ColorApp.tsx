import * as React from "react";
import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';
import Reset from './Reset';
import Result from './Result';

export default class ColorApp extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            color: 'red',
            fontSize: 15
        }
    }

    onSetColor = (params: any) => {
        this.setState({
            color: params
        });
    }
    onChangeSize = (value: any) => {
        // this.onChangeSize(params);
        // console.log(value)
        this.setState({
            fontSize: ((this.state.fontSize + value <= 36) && (this.state.fontSize + value >= 8)) ? this.state.fontSize + value : this.state.fontSize
        })

    };

    onReset = (value: boolean) => {
        if (value) {
            this.setState({
                color: 'red',
                fontSize: 15
            });
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} />
                        <Reset onReset={this.onReset} />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50">
                    <Result color={this.state.color} fontSize={this.state.fontSize} />
                </div>
            </div>
        )
    }
}