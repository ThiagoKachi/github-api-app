import React from 'react';

class UserInfo extends React.Component {
  render() {
    return(
      <div className="userInfo">
        <img src="https://avatars.githubusercontent.com/u/61670495?v=4" alt="Thiago" />
        <h1 className="userName">
          <a href="https://api.github.com/users/ThiagoKachi">Thiago Kachinsky</a> 
        </h1>

        <ul className="repos-info">
          <li>Repositórios: 16</li>
          <li>Seguidores: 17</li>
          <li>Seguindo: 12</li>
        </ul>
      </div>
    )
  }
}

export default UserInfo;
