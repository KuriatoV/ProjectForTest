import React, {Component} from 'react'
import {Field, FieldArray, reduxForm, SubmissionError} from 'redux-form'
import isEmail from 'sane-email-validation'

// const submit = () => {
//
// }

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Password Required!'
  }
  if (!values.username) {
    errors.username = 'Username ( Email ) Required!'
  } else if (!isEmail(values.username)) {
    errors.username = 'Invalid login ( Email ) format! '
  }
  return errors
}
const renderInput = field =>
<div>{console.log(field)}
  <label>{field.placeholder}</label>
  <div>
    <input {...field.input}{...field}/>
  </div>
  {field.meta.touched && field.meta.error && <span className='text-danger'>{field.meta.error}</span>}
</div>

class LoginForm extends Component {
  render() {
    const {
      error,
      handleSubmit,
      pristine,
      reset,
      submitting,
      onSubmit
    } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="username" type="email" component={renderInput} placeholder="Username"/>
        <Field name="password" type="password" component={renderInput} placeholder="Password"/>
        <div>
          <button type="submit" disabled={submitting}>Log In</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }

}
export default LoginForm = reduxForm({
  form: 'loginForm', validate,
  // submit,
})(LoginForm);
