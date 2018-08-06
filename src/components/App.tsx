import * as React from "react";

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: 'initial data'
        }
        this.onChange = this.onChange.bind(this);
        // this.onClickAdd = this.onClickAdd.bind(this);
    }

    public onChange(e: any) {
        this.setState({ data: e.target.value });
    }

    // public onClickAdd(e: any) {
    //     let item = {
    //         id: this.state.id + 1,
    //         data: this.state.data
    //     };
    // }
    public render() {
        return (
            <div className="container">
                <hr />
                <form role="form">
                    <legend>Todoapp</legend>

                    <div className="form-group">
                        <input type="text" value={this.state.data} className="form-control" placeholder="Input field" onChange={this.onChange} />
                        <h3>{this.state.data}</h3>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>



            </div>

        )
    }
}