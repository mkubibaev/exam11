import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {NotificationContainer} from "react-notifications";
import {Container} from "reactstrap";

import {logoutUser} from "./store/actions/usersActions";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

class App extends Component {
    render() {
        return (
            <Fragment>
                <NotificationContainer/>
                <header>
                    <Toolbar
                        user={this.props.user}
                        logout={this.props.logoutUser}
                    />
                </header>
                <Container className="py-3">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
