import React from 'react';
import PropTypes from 'prop-types';

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

Actions.propTypes = {
  handleClickRepos: PropTypes.func.isRequired,
  handleClickStarred: PropTypes.func.isRequired,
}

export default Actions;
