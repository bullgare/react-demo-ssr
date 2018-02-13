import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';
import { head } from "../helpers/head";

class UserListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    render() {
        return (
            <div>
                {head(`Users. ${this.props.users.length} loaded`)}
                List of users
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

function mapStateToProps({ users }) {
    return { users };
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UserListPage),
    loadData
};