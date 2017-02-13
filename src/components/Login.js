import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import data from '../../data/data.json'
import * as eventsActions from '../actions/eventsActions';
// import { Field, reduxForm } from 'redux-form'
// import ContactForm from './ContactForm'
import Contact from './Contact'


class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}

  }

  render() {
    return (
      <div >
        <h1 >LOGIN PAGE</h1>

        <Contact onSubmit={() => {}}/>

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
