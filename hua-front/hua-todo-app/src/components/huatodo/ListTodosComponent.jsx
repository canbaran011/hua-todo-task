import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService';
import HuaTodoDataService from '../../api/huatodo/HuaTodoDataService.js'
import moment from 'moment'
class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = 
        {
            todos : [],
            message: null
        }
        this.updateTodoClicked =this.updateTodoClicked.bind(this)
        this.deleteTodoClicked =this.deleteTodoClicked.bind(this)
        this.refreshTodos =this.refreshTodos.bind(this)
        this.addTodoClicked= this.addTodoClicked.bind(this)
    }
    componentWillUnmount(){
        console.log('component-will-unmount')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
return true
    }


    componentDidMount(){
     console.log('componentDidMount')
     this.refreshTodos()
     console.log(this.state)
    }   

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName
        HuaTodoDataService.retrieveAllTodos(username)
        .then(
            response => {
               console.log(response)
               this.setState({ todos :response.data})
            }
        )
    }

    deleteTodoClicked(id){
        let username= AuthenticationService.getLoggedInUserName()
        //console.log(id + " "+username)
        HuaTodoDataService.deleteTodo(username,id)
        .then(
            response =>{
                this.setState({message :`Delete of todo ${id} is successful`})
                this.refreshTodos()

            }
        )
    }
    addTodoClicked(id){
        console.log('create'+id)
        this.props.history.push(`/todos/-1`)
    
    
    
    
    }
    updateTodoClicked(id){
        console.log('update'+id)
        this.props.history.push(`/todos/${id}`)
        // /todos/${id}
        // let username= AuthenticationService.getLoggedInUserName()
        // //console.log(id + " "+username)
        // HuaTodoDataService.deleteTodo(username,id)
        // .then(
        //     response =>{
        //         this.setState({message :`Delete of todo ${id} is successful`})
        //         this.refreshTodos()

        //     }
        // )
    }

    render() {
        return (<div>
            <h1>Hua-ToDo-App</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
             <div className="btn-group"> <button className="btn btn-outline-primary btn-lg" onClick={this.addTodoClicked} >Create New +</button> </div>   
            <table className="table table-striped table-bordered table-responsive-md ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Deadline</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody> 
                { 
                    this.state.todos.map(
                    todo =>
                    <tr key={todo.id}>
                        <td>{todo.name} </td>
                        <td>{todo.description} </td>
                        <td>{todo.status.toString()} </td>
                        <td>{moment(todo.deadline).format('YYYY-MM-DD')} </td>
                        <td><button className="btn btn-info" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                        <td><button className="btn btn-danger" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                    </tr>
                )
                }
                </tbody>
            </table>
            </div>

        </div>)

    }
}

export default ListTodosComponent