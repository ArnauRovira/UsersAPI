import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchUser,
  fetchUsers
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchUser(e.target.value);
    console.log(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchUsers(this.props.text);
  };

  render() {
    return (
      <div className=" mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for users  ..
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Users"
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.users.text
});

export default connect(
  mapStateToProps,
  { searchUser, fetchUsers}
)(SearchForm);
