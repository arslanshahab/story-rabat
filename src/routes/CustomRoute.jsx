import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";

class CustomRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true
        }
    }
    renderRoute = () => {
        const { isAuthenticated } = this.state;
        const { isPrivate, path, component, exact } = this.props;
        if (!isPrivate) {
            return <Route path={path} exact={exact} component={component} />
        } else {
            if (isAuthenticated) {
                return <Route path={path} exact={exact} component={component} />
            } else {
                return <Redirect to="/login" />
            }
        }
    }
    render() {
        return (
            this.renderRoute()
        );
    }
}

export default CustomRoute;