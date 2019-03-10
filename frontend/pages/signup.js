import React, { Component } from 'react';
import router from 'next/router';

import Link from '../components/Link';
import Navigation from '../components/Navigation';
import ROUTES from '../constants/ROUTES';
import { withFirebase } from '../components/Firebase';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: null,
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    const { name, email, password } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser =>
        this.props.firebase.user(authUser.user.uid).set({ email, name })
      )
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        router.push(ROUTES.HOME.path);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { name, email, password, confirmPassword, error } = this.state;

    const isInvalid =
      password !== confirmPassword ||
      password === '' ||
      email === '' ||
      name === '';

    return (
      <div>
        <Navigation />
        <h1>Sign up</h1>
        <form onSubmit={this.onSubmit}>
          <input
            name="name"
            value={name}
            onChange={this.onChange}
            type="text"
            placeholder="Name"
          />
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
          />
          <input
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.onChange}
            type="password"
          />

          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>

          <p>
            Already have an account?{' '}
            <Link href={ROUTES.SIGN_IN.path}>{ROUTES.SIGN_IN.text}</Link>
          </p>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withFirebase(Signup);
