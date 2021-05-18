import React from 'react';
import PropTypes from 'prop-types';

class Repos extends React.Component {
  render() {
    const { className, title, repos } = this.props
    return(
      <div className={ className }>
        <h2>{ title }</h2>
        <ul>
          {repos.map(({ link, name }) => (
              <li key={ link }> 
                <a href={ link }>{ name }</a> 
              </li>
          ))}
        </ul>
      </div>
    )
  }
}

Repos.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos;