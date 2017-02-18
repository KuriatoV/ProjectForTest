import React, {Component} from 'react'
import {Field, FieldArray, reduxForm, SubmissionError} from 'redux-form'
import  { bindActionCreators } from 'redux'
import {  connect } from 'react-redux'
import * as userInfoActions from '../actions/userInfoActions'
const renderInput= (field)=>
<div>
  <label>{field.label}</label>
  <div>{console.log(field)}
  <input {...field.input}{...field}/>
  </div>
</div>
class AccountInfo extends Component {
  constructor(props, context) {
    super(props, context);

  }
  componentWillMount(){
      this.props.actions.loadUserInfo();
  }
  updateProfile= ()=>{

    this.props.actions.updateUserInfo()
  }
  render() {
// const {} = this.props
    return (
  <form onSubmit={this.udpateProfile}>
    <Field name="firstname" type="text" label="FIRST NAME" component={renderInput} />
    <Field name="lastname" type="text" label="LAST NAME" component={renderInput} />
    <Field name="phoneNumber" type="text" label="PHONE" component={renderInput} />
    <Field name="publicEmail" type="email" label="EMAIL" component={renderInput} />
    <Field name="description" type="textarea" label="ABOUT ME" component={renderInput} />

  </form>

    )

  }

}

AccountInfo = reduxForm({form: "accountInfo"})(AccountInfo)
AccountInfo = connect(
  state => ({
  initialValues: state.userInfo.user
}),
dispatch => ({
actions: bindActionCreators(userInfoActions, dispatch)
})
)(AccountInfo)
export default AccountInfo
