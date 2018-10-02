import * as React from "react";

class TaskControl extends React.Component<any, any> {
    public render() {
        return (
            <div className="row mt-15">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text" name="keyword" className="form-control" placeholder="Type Keyword" />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-primary">
                                <span className="fa fa-search mr-5"></span>
                                Search
                </button>
                        </span>
                    </div>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort By
                <span className="caret ml-5"></span>
                        </button>
                        <ul className="dropdown-menu ">
                            <li>
                                <a role="button" className="sort-selected">
                                    <span className="fa fa-sort-alpha-asc mr-5 pr-5">Name A-Z</span>
                                </a>
                            </li>
                            <li>
                                <a role="button">
                                    <span className="fa fa-sort-alpha-asc pr-5">Name Z-A</span>
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a role="button">
                                    Activated Status
                        </a>
                            </li>
                            <li>
                                <a role="button">
                                    Disabled Status
                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default TaskControl;