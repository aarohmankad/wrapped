import React, { Component } from 'react';
import router from 'next/router';

import Link from '../components/Link';
import Navigation from '../components/Navigation';
import ROUTES from '../constants/ROUTES';
import { withFirebase } from '../components/Firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class Signin extends Component {
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
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/static/login_background.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <Navigation />
        <h1>Sign in</h1>
        <form onSubmit={this.onSubmit}>
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

          <button disabled={isInvalid} type="submit">
            Sign In
          </button>

          <p>
            Don't have an account?{' '}
            <Link href={ROUTES.SIGN_UP.path}>{ROUTES.SIGN_UP.text}</Link>
          </p>
          <p>
            Forgot your Password?{' '}
            <Link href={ROUTES.FORGOT_PASSWORD.path}>
              {ROUTES.FORGOT_PASSWORD.text}
            </Link>
          </p>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withFirebase(Signin);
