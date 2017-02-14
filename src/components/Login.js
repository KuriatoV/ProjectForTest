import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link,browserHistory} from 'react-router';
import * as loginActions from '../actions/loginActions';
import axios from 'axios';
import LoginForm from './LoginForm'
import { SubmissionError } from 'redux-form'


class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}

  }
  componentWillReceiveProps(next){
    next.loginSuccess && (browserHistory.push('/events'))
  }


submit= (values) =>{
  this.props.actions.login(values);
}

  render() {
    return (
      <div >
        <h1 >LOGIN PAGE</h1>
        <LoginForm onSubmit={this.submit}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loginSuccess:state.login.loginSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
