import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './scss/style.scss'
import AppHeader from "./views/pages/common/header/AppHeader";
import AppFooter from "./views/pages/common/footer/AppFooter";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"/>
    </div>
)

const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const NewProject = React.lazy(() => import('./views/pages/project/NewProject'))
const Project = React.lazy(() => import('./views/pages/project/Project'))
const Home = React.lazy(() => import('./views/pages/home/Home'))

class App extends Component {
    render() {
        return (
            <Router>
                <React.Suspense fallback={loading}>
                    <Switch>
                    
            		<Route exact path="/">
                		<Redirect to="/register"/>
            		</Route>
                        <Route
                            exact
                            path="/login"
                            name="Login Page"
                            render={(props) => <Login {...props} />}/>
                        <Route
                            exact
                            path="/register"
                            name="Register Page"
                            render={(props) => <Register {...props} />}/>
                        <Route
                            exact
                            path="/home"
                            name="Home"
                            render={(props) => <Home {...props} />}/>
                        <Route
                            exact
                            path="/project/:projectId"
                            name="Project"
                            render={(props) => <Project {...props} />}/>
                        <Route
                            exact
                            path="/new"
                            name="New project"
                            render={(props) => <NewProject {...props} />}/>
                            
            		<Route path="*">
                		<Redirect to={"/home"}/>
            		</Route>
                    </Switch>
                </React.Suspense>
            </Router>
        )
    }
}

export default App