import React from 'react';

class Actions extends React.Component {
  render() {
    const { handleClickRepos, handleClickStarred } = this.props;
    return(
      <div className="actions">
        <button onClick={ handleClickRepos }>Ver Repositórios</button>
        <button onClick={ handleClickStarred }>Ver Favoritos</button>
      </div>
    )
  }
}

export default Actions;
