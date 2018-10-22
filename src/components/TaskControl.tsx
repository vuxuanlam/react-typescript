import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../action/index"
class TaskControl extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            keyword: "",
            sort: {
                by: "name",
                value: 1
            }
        };
    }

    onChange = (event: any) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
        this.props.onSearchTask(this.state.keyword);
        
    }

    onSort = (sortBy: any, sortValue: any) => {
        this.setState({
            sort: {
                by: sortBy,
                value: sortValue
            }
        })
        // , () => console.log(this.state.sort.by + "-" + this.state.sort.value));
        this.props.onSort(this.state.sort.by, this.state.sort.value);
    }



    public render() {
        let { sort } = this.state;
        return (
            <div className="row mt-15">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text" name="keyword" className="form-control" placeholder="Type Keyword" onChange={this.onChange} />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-primary" onClick={this.onSearch}>
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
                            <li onClick={() => this.onSort("name", 1)}>
                                <a role="button" className={(sort.by === "name" && sort.value === 1) ? "sort-selected" : ""}>
                                    <span className="fa fa-sort-alpha-asc mr-5 pr-5">Name A-Z</span>
                                </a>
                            </li>
                            <li onClick={() => this.onSort("name", -1)}>
                                <a role="button" className={(sort.by === "name" && sort.value === -1) ? "sort-selected" : ""}>
                                    <span className="fa fa-sort-alpha-asc pr-5">Name Z-A</span>
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li onClick={() => this.onSort("status", 1)}>
                                <a role="button" className={(sort.by === "status" && sort.value === 1) ? "sort-selected" : ""}>
                                    Activated Status
                        </a>
                            </li>
                            <li onClick={() => this.onSort("status", -1)} >
                                <a role="button" className={(sort.by === "status" && sort.value === -1) ? "sort-selected" : ""}>
                                    Disabled Status
                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        onSearchTask: (keyword: any) => {
            dispatch(actions.searchTask(keyword))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskControl);