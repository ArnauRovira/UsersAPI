import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UserCard extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <br></br>
        <Link className="btn btn-primary card card-body bg-dark text-center h-100" to={'/user/' + user.login}>
        <div >
         
          
          <h5 className="text-light card-title">
            {user.login} - {user.id}
          </h5>
          
            <i className="fas fa-chevron-right" />
          
        </div>
        </Link>
      </div>
    );
  }
}

export default UserCard;
