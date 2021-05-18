import React from 'react';
import Actions from './Actions';
import Repos from './Repos';
import Search from './Search';
import UserInfo from './UserInfo';
import PropTypes from 'prop-types';

class AppContent extends React.Component {
  render() {
    const { userInfo, repos, starred } = this.props;
    return(
      <div className="app">
        <Search />
        {!!userInfo && <UserInfo userInfo={ userInfo } />}
        {!!userInfo && <Actions />}
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
  userInfo: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
}

export default AppContent;
