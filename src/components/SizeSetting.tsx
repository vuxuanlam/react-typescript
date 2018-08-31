import * as React from "react";

class SizeSetting extends React.Component<any, any> {

    public render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Size :15px</h3>
                </div>
                <div className="panel-body ">
                    <button type="button" className="btn btn-primary mr-20">Increase</button>
                    <button type="button" className="btn btn-primary">Decrease</button>
                </div>
            </div>
        )

    }
}

export default SizeSetting;