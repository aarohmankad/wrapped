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
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: null,
};

const Logo = styled.img`
  width: 75px;
  height: 75px;
  position: absolute;
  z-index: 10;
  top: 25px;
  left: 25px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(/static/signup_background.jpg);
  background-size: cover;
  display: flex;

  & input {
    width: 80%;
  }
`;

const RightBox = styled.div`
  width: 500px;
  height: 680px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
  border-radius: 0px 25px 25px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftBox = styled(RightBox)`
  width: 376px;
  height: 680px;
  background: ${({ theme }) => theme.lt_blue};
  box-shadow: 0px;
  border-radius: 25px 0px 0px 25px;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.white};
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-height: normal;
  font-size: 72px;
`;

const SubHeader = styled(Header)`
  color: ${({ theme }) => theme.grey};
  font-size: 30px;
`;

const Paragraph = styled.p`
  width: 357px;
  height: 50px;
  color: ${({ theme }) => theme.grey};
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 14px;
  text-align: center;
`;

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    const { username, email, password } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser =>
        this.props.firebase.user(authUser.user.uid).set({ username, email })
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
    const { username, email, password, confirmPassword, error } = this.state;

    const isInvalid =
      password !== confirmPassword ||
      password === '' ||
      email === '' ||
      username === '';

    return (
      <div>
        <Navigation />
        <Logo src="../static/wrapped_logo.png" alt="wrapped-logo" />
        <Container>
          <Header>Sign up</Header>
          <LeftBox />
          <RightBox>
            <SubHeader>Welcome to Wrapped!</SubHeader>
            <Paragraph>
              Let’s get you all set up so you can start finding the perfect gift
              for everyone on your list.
            </Paragraph>
            <form onSubmit={this.onSubmit}>
              <Input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
              />
              <Input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email"
              />
              <Input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
              />
              <Input
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.onChange}
                type="text"
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
          </RightBox>
        </Container>
      </div>
    );
  }
}

export default withFirebase(Signup);
