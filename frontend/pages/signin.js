import React, { Component } from 'react';
import router from 'next/router';
import styled from 'styled-components';
import ActionButton from '../components/Button/ActionButton';
import Input from '../components/Input';
import Link from '../components/Link';
import Navigation from '../components/Navigation';
import ROUTES from '../constants/ROUTES';
import { withFirebase } from '../components/Firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const Logo = styled.img`
  width: 75px;
  height 75px;
  position: absolute;
  z-index: 10;
  top: 25px;
  left: 25px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(/static/login_background.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input {
    width: 100%;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.white};
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-height: normal;
  font-size: 72px;
`;

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
        router.push(ROUTES.DASHBOARD.path);
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
      <div>
        <Navigation />
        <Logo src="../static/wrapped_logo.png" alt="wrapped_logo" />
        <Container>
          <Header>wrapped.</Header>
          <form onSubmit={this.onSubmit}>
            <Input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="email"
            />
            <Input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="password"
            />
            <ActionButton disabled={isInvalid} type="submit">
              Sign In
            </ActionButton>
          </form>
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
        </Container>
      </div>
    );
  }
}

export default withFirebase(Signin);
