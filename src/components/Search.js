import React from 'react';

class Search extends React.Component {
  render() {
    return(
      <div className="search">
        <input 
          type="search" 
          name="" 
          placeholder="Digite o nome do usuários do Github" 
        />
      </div>
    )
  }
}

export default Search;
