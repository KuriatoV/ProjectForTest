import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
	children: PropTypes.object.isRequired,
};
