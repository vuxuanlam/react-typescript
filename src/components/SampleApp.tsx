import * as React from "react";
import Todo from './Todo';
const uuidv4 = require('uuid/v4');

export default class SampleApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            todos: [
                {
                    id: "1",
                    name: "test1"
                },
                {
                    id: "12",
                    name: "test12323"
                }

            ],

            lam: '',
             
        }
        // this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    public onSubmit(e: any) {
        e.preventDefault();
        var todoArr = this.state.todos;
        todoArr.push({
            id: uuidv4(),
            name: this.state.lam
        })
        this.setState(todoArr);
    }

   onChange = (e: any) => {
        let lam = e.target.name;
        let value = e.target.value;
        console.log(value);
        this.setState({ [lam]: value });
    }

    onDelete = (data :any) =>{
        console.log(data);
        var result = -1 ;
        var deleteArr = this.state.todos;
        deleteArr.forEach((element:any, index :any) => {
            if(data === element.id)
                result = index;
            return result;
         });
        if(result  !== -1 )
        {
            deleteArr.splice(result,1);
        }
        this.setState({todos : deleteArr});
    
    }

    public render() {
        var element = this.state.todos.map((todo: any, index: string) => {
            return <Todo lam={todo} key={index} onDelete = {this.onDelete} />

        })
        return <div className="panel panel-default">
            <div className="panel-body">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>TODOS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Action</td>
                        </tr>
                        {element}
                    </tbody>
                </table>

                <form onSubmit={this.onSubmit}>
                    <legend>Form title</legend>

                    <div className="form-group">
                        <input type="text" className="form-control" name='lam' id="" placeholder="Input field" onChange={this.onChange} value={this.state.lam} required />
                    </div>

                    <button type="submit" className="btn btn-primary" >Add</button>
                </form>

            </div>
        </div>

    }
}