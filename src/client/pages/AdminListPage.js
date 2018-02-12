import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from "../actions";

class AdminListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        return (
            <div>
                <h3>List of admins</h3>
                <ul>{this.renderList()}</ul>
            </div>
        );
    }

    renderList() {
        if (!this.props.admins) {
            return '';
        }

        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
        });
    }
}

function mapStateToProps({ admins }) {
    return { admins };
}

export default {
    component: connect(mapStateToProps, { fetchAdmins })(AdminListPage),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
}