import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component{
    render(){
            const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
            console.log(isUserLoggedIn)
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-danger">
                    <div><a href="#" className="navbar-brand">HuaTodoApp</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li ><Link className="nav-link bg-danger" to="/welcome/someThing">Home</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link bg-danger" to="/todos">Todos</Link></li>}
                   </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li ><Link className="nav-link bg-danger" to="/login">Login</Link> </li>}
                        {isUserLoggedIn && <li ><Link className="nav-link bg-danger" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>

                </nav>
            </header>
            
        )
    }
}

export default HeaderComponent