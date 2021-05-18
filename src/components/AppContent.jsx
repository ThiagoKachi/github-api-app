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
      handleSearch, 
      handleClickRepos, 
      handleClickStarred 
    } = this.props;
    
    return(
      <div className="app">
        <Search handleSearch={ handleSearch } />
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
}

export default AppContent;
