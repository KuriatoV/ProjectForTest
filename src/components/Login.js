import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link,browserHistory} from 'react-router';
import * as loginActions from '../actions/loginActions';
import axios from 'axios';
import LoginForm from './LoginForm'
import { SubmissionError } from 'redux-form'
import MDSpinner from "react-md-spinner";

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}

  }
  componentWillReceiveProps(next){
    next.loginSuccess && (browserHistory.push('/events'));

  }
  componentWillUnmount(){
    this.props.actions.resetToInitialstate;
  }


submit= (values) =>{
  this.props.actions.login(values);

}
reset =()=>{
  this.props.actions.reset();
}

  render() {
    const {loginFailure,loginRequest} =this.props
    return (
      <div>
        <h1 >LOGIN PAGE</h1>


        {loginRequest ?
        <div style={{margin:'0 auto',textAlign:'center'}}>  <MDSpinner  size='70'/></div> :
        <LoginForm
            onSubmit={this.submit}
          />
        }

        {loginFailure &&
          <div>
          <span>Учетной записи с такими даннными не найдено!</span>
          <button onClick={this.reset}>Ок</button>
        </div>
      }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loginSuccess:state.login.loginSuccess,
    loginFailure:state.login.loginFailure,
    loginRequest:state.login.loginRequest,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
