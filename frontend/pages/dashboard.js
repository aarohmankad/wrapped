import React, { Component } from 'react';
import router from 'next/router';

import CreateEvent from '../components/CreateEvent';
import Link from '../components/Link';
import Navigation from '../components/Navigation';
import ROUTES from '../constants/ROUTES';
import { withFirebase } from '../components/Firebase';

const INITIAL_STATE = {};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
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
    return (
      <div>
        <Navigation />
        <h1>Dashboard</h1>
        <CreateEvent />
      </div>
    );
  }
}

export default withFirebase(Dashboard);
