import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {NotificationContainer} from "react-notifications";
import {Container, Row, Col} from "reactstrap";

import {logoutUser} from "./store/actions/usersActions";
import {fetchCategories} from "./store/actions/categoriesActions";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Items from "./containers/Items/Items";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

class App extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

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
                <Container className="py-5">
                    <Row>
                        <Col xs="12" md="3">
                            <Sidebar categories={this.props.categories}/>
                        </Col>
                        <Col xs="12" md="9">
                            <Switch>
                                <Route path="/" exact component={Items}/>
                                <Route path="/categories/:id" component={Items}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/register" component={Register}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    categories: state.categories.categories
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    fetchCategories: () => dispatch(fetchCategories())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
