import React from 'react';
import Actions from './Actions';
import Repos from './Repos';
import Search from './Search';
import UserInfo from './UserInfo';
import PropTypes from 'prop-types';

class AppContent extends React.Component {
  render() {
    const { 
      userInfo, 
      repos, 
      starred, 
      isFetching,
      handleSearch, 
      handleClickRepos, 
      handleClickStarred 
    } = this.props;
    
    return(
      <div className="app">
        <Search isDisabled={ isFetching } handleSearch={ handleSearch } />
        {isFetching && <div>Carregando...</div>}
        {!!userInfo && <UserInfo userInfo={ userInfo } />}
        {!!userInfo && <Actions 
          handleClickRepos={ handleClickRepos } 
          handleClickStarred={ handleClickStarred } 
        />}
        {!!repos.length && 
          <Repos 
            className='repos' 
            title='Repositórios' 
            repos={ repos }
          />
        }
        {!!starred.length && 
          <Repos 
            className='starred' 
            title='Favoritos' 
            repos={ starred }
          />
        }
      </div>
    )
  }
}

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClickRepos: PropTypes.func.isRequired,
  handleClickStarred: PropTypes.func.isRequired,
}

export default AppContent;
