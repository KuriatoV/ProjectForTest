import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link,browserHistory} from 'react-router';
import * as eventsActions from '../actions/eventsActions';
// import { Field, reduxForm } from 'redux-form'
// import ContactForm from './ContactForm'
import LoginForm from './LoginForm'


class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}

  }

  render() {
    return (
      <div >
        <h1 >LOGIN PAGE</h1>

        <LoginForm onSubmit={() => {}}/>
        <Link to='/events'>MAKE ME WORK PLS</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
