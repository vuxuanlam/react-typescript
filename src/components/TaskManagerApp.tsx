import * as React from 'react';

export default class TaskManagerApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            todos: [
                {
                    name: "react",
                    status: "active"
                },
                {
                    name: "typescript",
                    status: "closed"
                }

            ],
        }
    }

    public render() {

        return <div className="container">

            <form className="form-horizontal" role="form">
                <div className="form-group">
                    <legend>Task Manager</legend>
                </div>

                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>

        </div>

    }
}