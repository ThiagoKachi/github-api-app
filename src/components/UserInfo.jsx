import React from 'react';
import PropTypes from 'prop-types';

class UserInfo extends React.Component {
  render() {
    const { userInfo: { photo, login, username, repos, followers, following } } = this.props;
    return(
      <div className="userInfo">
        <img src={ photo } alt="Thiago" />
        <h1 className="userName">
          <a href={`https://api.github.com/users/${ login }`}>{ username }</a> 
        </h1>

        <ul className="repos-info">
          <li>Repositórios: { repos }</li>
          <li>Seguidores: { followers }</li>
          <li>Seguindo: { following }</li>
        </ul>
      </div>
    )
  }
}

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo;
