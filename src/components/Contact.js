import React, { Component } from 'react'
import {Field, FieldArray, reduxForm, SubmissionError} from 'redux-form'

class Contact extends Component {
  render() {
    const {handleSubmit} = this.props;
    const renderPhones = ({fields}) => <ul>
      <li>
        <button type = "button" onClick={() => fields.push()}>Add Phone</button>
      </li>
      {fields.map((field, index) => <li key={index}>phone{index + 1}
        <Field name={field} component="input"/>
      </li>)}
    </ul>
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <div>
          <label htmlFor="whatDoYouWant">whatDoYouWant</label>
          <Field name="whatDoYouWant" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="whereAreYouGoing">whereAreYouGoing</label>
          <Field name="whereAreYouGoing" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="phones">Phones</label>
          <FieldArray name="phones" component={renderPhones} type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

}
Contact = reduxForm({
  form: 'contact2' // a unique name for this form
})(Contact);

export default Contact;
