import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { routes } from 'routes';
import Route from 'routes/CustomRoute';
import Home from 'containers/Home';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} isPrivate={false} component={Home}/>
                    <Route path="/login" exact={true} isPrivate={false} component={() => <h1>Login</h1>} />
                    {
                        routes.map(route => {
                            return <Route path={route.path} exact={route.exact} component={route.component} isPrivate={route.isPrivate} />
                        })
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation;