import * as React from "react";

class TaskManagerApp extends React.Component<any, any> {
    public render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Task Manager App </h1>
                    <hr />
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3 className="panel-title">Add New Task
                            <span className="fa fa-times-circle text-right" ></span>
                            </h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <label> Task Name </label>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <label> Status </label>

                                <select name="status" className="form-control">
                                    <option value="true">Activated</option>
                                    <option value="false">Disabled</option>
                                </select>
                                <br />

                                <div className="text-center">

                                    <button type="button" className="btn btn-primary mr-20">
                                        <span className="fa fa-save mr-5"></span>Save
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                        <span className="fa fa-close mr-5"></span>Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                    <button type="button" className="btn btn-primary">Add New Task</button>
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
                    <div className="row mt-15">

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            <table className="table  table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">No</th>
                                        <th className="text-center">Task Name</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input type="text" className="form-control" name="filterName" />
                                        </td>
                                        <td>
                                            <select name="filterStatus" className="form-control">
                                                <option value="true">All</option>
                                                <option value="false">Desabled</option>
                                                <option value="false">Activated</option>
                                            </select>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TaskManagerApp;