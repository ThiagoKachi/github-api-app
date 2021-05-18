import React from 'react';
import AppContent from './components/AppContent';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    }
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    if (keyCode === ENTER) {
      e.target.disabled = true;
      axios.get(`https://api.github.com/users/${value}`)
        .then(({ data: { name, avatar_url, login, public_repos, followers, following} }) => {
          this.setState({
            userInfo: {
              username: name,
              photo: avatar_url,
              login: login,
              repos: public_repos,
              followers: followers,
              following: following
            },
            repos: [],
            starred: [],
          })
        })
        .finally(() => {
          e.target.disabled = false;
        })
    }
  }

  handleClickRepos(type) {
    return () => {
      const username = this.state.userInfo.login
      axios.get(`https://api.github.com/users/${username}/${type}`)
        .then(({ data }) => {
          this.setState({
            [type]: data
        })
      })
    }
  }

  render() {
    const { userInfo, repos, starred } = this.state;
    return (
      <AppContent 
        userInfo={ userInfo }
        repos={ repos }
        starred={ starred }
        handleSearch={ (e) => this.handleSearch(e) }
        handleClickRepos={ this.handleClickRepos('repos') }
        handleClickStarred={ this.handleClickRepos('starred') }
      />
    )
  }
}

export default App;
