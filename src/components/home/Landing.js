import React, { Component } from 'react';

import SearchForm from './SearchForm';
import UsersContainer from './UsersContainer';

export class Landing extends Component {
  render() {
    
    return (
      <div className="container">
        <SearchForm />
        <UsersContainer />
      </div>
    );
  }
}


export default (Landing);
