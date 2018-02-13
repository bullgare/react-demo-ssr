import React, { Component } from 'react';
import { connect } from 'react-redux';
import { head } from "../helpers/head";

import { fetchAdmins } from "../actions";
import requireAuth from '../components/hocs/require_auth';

class AdminListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        return (
            <div>
                {head(`Admins. ${this.props.admins.length} loaded`)}
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
    component: connect(mapStateToProps, { fetchAdmins })(
        requireAuth(AdminListPage)
    ),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
}