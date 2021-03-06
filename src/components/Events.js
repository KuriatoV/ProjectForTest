import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Link,browserHistory} from 'react-router';
var moment = require('moment');
import * as eventsActions from '../actions/eventsActions';
import data from '../../data/data.json'
import './events.css';
// import { Field, reduxForm } from 'redux-form'
// import ContactForm from './ContactForm'
// import AccountInfo from './AccountInfo'


class Events extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
    props.actions.loadEvents();
    // props.actions.loadUserInfo();
  }
// componentWillMount(){browserHistory.push('/user-self')
// }
  render() {
    const { events } = this.props;
    return (
      <div >
      <Link to='/user'>USER PROFILE</Link>

        <h1 className="centered" >Event's list</h1>
        {events.items.map(item=>
        <div
          key={item.id}
          className="event-item"
        >
          <h4>{item.name}</h4>
        <div className="row">
          <div className="col-sm-6" >
            <button className="btn btn-info">By:<span className="pull-right">
              {item.createdBy.firstname} &nbsp;
              {item.createdBy.lastname}</span>
            </button>
          </div>
            <div className="col-sm-6">
              <p>Дата начала :{moment(item.eventStartDate).format('YYYY-MM-DD')}
              </p></div>
            </div>
        </div>
        )}


      </div>
    )
  }
}

function mapStateToProps(state) {
  return { events:state.events.events,
          accountInfo:state.login.accountInfo,
   };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(eventsActions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Events);
