import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { handleSearch, isDisabled } = this.props;
    return(
      <div className="search">
        <input 
          type="search" 
          placeholder="Digite o nome do usuários do Github" 
          disabled={ isDisabled }
          onKeyUp={ handleSearch }
        />
      </div>
    )
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default Search;
