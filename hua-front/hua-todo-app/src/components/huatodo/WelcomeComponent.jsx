import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/huatodo/HelloWorldService.js'


class WelcomeComponent extends Component {
        constructor(props){
            super(props)
            this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
            this.state ={
                welcomeMessage:''
            }   
            this.handleSuccesfulResponse=this.handleSuccesfulResponse.bind(this)
            this.handleError=this.handleError.bind(this) 
        }


    render() {
        return(<>
        <h1>Welcome</h1>
    <div>Hello {this.props.match.params.name}.
     Go for manage your ToDo List <Link to="/todos">here.</Link></div>
    <div className="container">
            Click here to get welcome message <br/>
            <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">TakeWelcomeMessage</button>
    </div>
    <div className="container">
                {this.state.welcomeMessage}
    </div>
                </>
        )
    }
    retrieveWelcomeMessage(){ //kind of a client
        
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccesfulResponse(response) ) //successful response
        //.catch() //unsuccessful response

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccesfulResponse(response) ) //successful response

        HelloWorldService.executeHelloWorlPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccesfulResponse(response) ) //successful response
        .catch(error => this.handleError(error))

    }

    handleSuccesfulResponse(response){
        console.log(response)
        this.setState({welcomeMessage :response.data.message})
    }

    handleError(error){
        console.log(error.response)
       this.setState({welcomeMessage: error.response.data.message})
    }
}
export default WelcomeComponent