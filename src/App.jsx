import React from 'react';
import AppContent from './components/AppContent';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      userInfo: {
        username: 'Thiago Kachinsky',
        repos: 16,
        fallowers: 17,
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
