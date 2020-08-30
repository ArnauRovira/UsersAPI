import React, { Component } from 'react';

import { connect } from 'react-redux';

import UserCard from './UserCard';

export class UsersContainer extends Component {
  render() {
    const { users } = this.props;
    let content = '';

    content =
    users.incomplete_results === false
        ? users.items.map((user, index) => (
            <UserCard key={index} user={user} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(UsersContainer);
