import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="se">
          <input 
            type="search" 
            name="" 
            placeholder="Digite o nome do usuários do Github" 
          />
        </div>

        <div className="userInfo">
          <img src="https://avatars.githubusercontent.com/u/61670495?v=4" alt="Thiago" />
          <h1>
            <a href="https://api.github.com/users/ThiagoKachi">Thiago Kachinsky</a> 
          </h1>

          <ul className="repos-info">
            <li>Repositórios: 16</li>
            <li>Seguidores: 17</li>
            <li>Seguindo: 12</li>
          </ul>

          <div className="actions">
            <button>Ver Repositórios</button>
            <button>Ver Favoritos</button>
          </div>

          <div className="repos">
            <h2>Repositórios</h2>
            <ul>
              <li> <a href="#">Nome do repositório</a> </li>
            </ul>
          </div>

          <div className="starred">
            <h2>Favoritos</h2>
            <ul>
              <li> <a href='#'>Nome do repositório</a> </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
