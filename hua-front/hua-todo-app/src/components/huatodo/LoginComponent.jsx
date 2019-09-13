import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'someThing',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }
        // this.handleUserNameChange =this.handleUserNameChange.bind(this)
        // this.handlePasswordChange =this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }


    handleUserNameChange(event) {
        console.log(event.target.value);
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({
            password: event.target.value
        })
    }
    loginClicked() {
        //someThing,real
        if (this.state.username ==='someThing' && this.state.password === 'real') {
            AuthenticationService.registerSuccesfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({ showSuccessMessage: true })
            // this.setState({ hasLoginFailed: false })
        }
        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {/* <ShowValidCredentials showSuccessMessage={this.state.showSuccessMessage}/> */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">UserName or Password-Wrong!</div>}
                {this.state.showSuccessMessage && <div>Succesfull-Login</div>}
              
              <div className="container ">
              
                        <form className="form-horizontal " />
                        
                        <div className="col-xs-6 col-xs-offset-3" >
                        <label className="col-form-label-left align-items-center" for="exampleInputEmail1">UserName</label>
                        <input className="form-control input-lg" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="UserName" />

                        </div>

                        <div className="col-xs-6 col-xs-offset-3" />
                        <label className="col-form-label align-items-center"  for="exampleInputPassword1">Password</label>
                        <input className="form-control input-lg" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                        <div />

                        <button type="submit" onClick={this.loginClicked} className="btn btn-primary">Login</button>
                        <form />
              
              
                </div>
              
              
              
                </div>
           
           




            </div>
        
        )
    }
}


export default LoginComponent