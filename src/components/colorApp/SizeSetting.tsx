import * as React from "react";

class SizeSetting extends React.Component<any, any> {

    changeSize = (params: any) => {
        this.props.onChangeSize(params)
    };

    public render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Size :{this.props.fontSize} px </h3>
                </div>
                <div className="panel-body ">
                    <button type="button" className="btn btn-primary mr-20" onClick={() => this.changeSize(+2)}>Increase</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.changeSize(-2)}>Decrease</button>
                </div>
            </div>
        )

    }
}

export default SizeSetting;