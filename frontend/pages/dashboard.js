import React, { Component } from 'react';
import router from 'next/router';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import CreateEvent from '../components/CreateEvent';
import EventList from '../components/EventList';
import Link from '../components/Link';
import Navigation from '../components/Navigation';
import ROUTES from '../constants/ROUTES';
import { withFirebase } from '../components/Firebase';

const INITIAL_STATE = {
  events: [],
  loading: true,
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    const { user } = this.props;
    const { uid } = user;
    this.setState({ loading: true });
    this.props.firebase
      .events()
      .orderByChild('createdBy')
      .equalTo(uid)
      .on('value', snapshot => {
        const eventData = snapshot.val();
        const events = Object.keys(eventData).map(key => ({
          ...eventData[key],
          uid: key,
        }));

        this.setState({ events, loading: false });
      });
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        router.push(ROUTES.HOME.path);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { loading, events } = this.state;
    return (
      <div>
        <Navigation />
        <h1>Dashboard</h1>
        <CreateEvent />
        <EventList loading={loading} events={events} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }, props) => ({
  ...props,
  user: auth.user,
});

const mapDispatchToProps = (dispatch, props) => ({});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    null
  )
)(Dashboard);
