import React, { Component, PropTypes } from 'react';

// import Schedule from '../components/Schedule';


export default class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        {/* <Schedule /> */}
        {this.props.children}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(scheduleActions, dispatch)
//   };
// }
//
// export default connect(  mapStateToProps,  mapDispatchToProps)(App);
App.propTypes = {
	children: PropTypes.object.isRequired,
};
