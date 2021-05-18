import React from 'react';
import AppContent from './components/AppContent';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      userInfo: {
        username: 'Thiago Kachinsky',
        photo: 'https://avatars.githubusercontent.com/u/61670495?v=4',
        login: 'ThiagoKachi',
        repos: 16,
        followers: 17,
        following: 12,
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }],
    }
  }

  render() {
    const { userInfo, repos, starred } = this.state;
    return (
      <AppContent 
        userInfo={ userInfo }
        repos={ repos }
        starred={ starred }
      />
    )
  }
}

export default App;
