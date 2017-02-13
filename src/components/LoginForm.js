import React, {Component} from 'react'
import { Field, FieldArray, reduxForm, SubmissionError} from 'redux-form'

class LoginForm extends Component {
  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="email" component={'input'} label="Username"/>
        <div><Field name="password" type="password" component={'input'} label="Password"/> {error && <strong>{error}</strong>}</div>
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
