import * as React from "react";
import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';
import Reset from './Reset';
import Result from './Result';

export default class ColorApp extends React.Component<any, any>{
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ColorPicker />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting />
                        <Reset />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50">
                    <Result />
                </div>
            </div>
        )
    }
}