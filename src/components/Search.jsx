import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  render() {
    return(
      <div className="search">
        <input 
          type="search" 
          name="" 
          placeholder="Digite o nome do usuários do Github" 
          onKeyUp={(e) => {
            const value = e.target.value;
            const keyCode = e.which || e.keyCode;
            const ENTER = 13;
            if (keyCode === ENTER) {
              axios.get(`https://api.github.com/users/${value}`)
                .then((result) => {
                  console.log(result.data)
                })
            }
          }}
        />
      </div>
    )
  }
}

export default Search;
