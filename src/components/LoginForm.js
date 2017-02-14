import React, {Component} from 'react'
import { Field, FieldArray, reduxForm, SubmissionError} from 'redux-form'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class LoginForm extends Component {
  render() {
    const { error, handleSubmit, pristine, reset, submitting,onSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="username" type="email" component={renderField} label="Username"/>
        <div><Field name="password" type="password" component={renderField} label="Password"/> {error && <strong>{error}</strong>}</div>
        <div>
          <button type="submit" disabled={submitting}>Log In</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }

}
export default LoginForm = reduxForm({
  form: 'loginForm' // a unique name for this form
})(LoginForm);
