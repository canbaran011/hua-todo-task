import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import HeaderComponent from './HeaderComponent';
// import FooterComponent from './FooterComponent';
import TodoComponent from './TodoComponent.jsx';

class HuaTodoApp extends Component {
    render() {
        return (
            <div className="HuaTodoApp">
                <Router>
                    <>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        {/* <FooterComponent/> */}
                    </>
                </Router>

                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}






function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>UserName or Password is Wrong</div>
    }
    return null
}
function ShowValidCredentials(props) {
    if (props.showSuccessMessage) {
        return <div>Succesfull Login</div>
    }
    return null
}






export default HuaTodoApp;