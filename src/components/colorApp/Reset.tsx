import * as React from "react";

class Reset extends React.Component<any, any> {

    resetDefault = () => {
      this.props.onReset(true)  
    };

    public render() {
        return(
            <button type="button" className="btn btn-info" onClick = {() => this.resetDefault()}>reset</button>
        )
    }
}
export default Reset;