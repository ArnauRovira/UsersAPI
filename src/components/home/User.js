import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser} from '../../actions/searchActions';


export class User extends Component {
  componentDidMount() {
    console.log(this.props.match.params.login);
    this.props.fetchUser(this.props.match.params.login);
  }
  render() {
    const {  user } = this.props;
    console.log(user);
    let UserInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={user.avatar_url} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{user.name === null ? "User" : user.name}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Name: </strong> {user.name === null ? "No name registered" : user.name}
              </li>
              <li className="list-group-item">
                <strong>Location: </strong>  {user.location === null ? "No location registered" : user.location}
              </li>
              <li className="list-group-item">
                <strong>email: </strong> {user.email === null ? "No email registered" : user.email}
              </li>
              <li className="list-group-item">
                <strong>Company: </strong> {user.company === null ? "No company registered" : user.company}
              </li>
              <li className="list-group-item">
                <strong>Login:</strong>  {user.login === null ? "No login registered" : user.login}
              </li>
              <li className="list-group-item">
                <strong>Id:</strong>  {user.id === null ? "No id registered" : user.id}
              </li>
              <li className="list-group-item">
              <strong>User </strong>
              <a
                href={user.url}
                target="_blank"
                
                rel="noopener noreferrer"
              >
               Link
              </a>
                
              </li>
              <li className="list-group-item">
              <strong>Github </strong>
              <a
                href={user.html_url}
                target="_blank"
                
                rel="noopener noreferrer"
              >
                 Link
              </a>
                
              </li>
              
              
            </ul>
          </div>
        </div>
        
      </div>
    );

    let content = UserInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(
  mapStateToProps,
  { fetchUser}
)(User);
