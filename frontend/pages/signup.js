import React, { Component } from "react";
import router from "next/router";
import styled from "styled-components";
import ActionButton from "../components/Button/ActionButton";
import Input from "../components/Input";
import Link from "../components/Link";
import Navigation from "../components/Navigation";
import ROUTES from "../constants/ROUTES";
import { withFirebase } from "../components/Firebase";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: null
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
  justify-content: center;
  align-items: center;

  & input {
    width: 80%;
    margin-left: 8%;
    margin-bottom: 4%;
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

const InputContainer = styled.div`
  margin: 25px 0px 55px 0px;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.white};
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-height: normal;
  font-size: 72px;
  padding-bottom: 10px;
`;

const Line = styled.hr`
  border-color: ${({ theme }) => theme.lt_grey};
  border-width: 1px 447px 1px 1px;
  border-top: 1px solid;
  margin: 24px 0px 24px 0px;
`;

const SubHeader = styled(Header)`
  color: ${({ theme }) => theme.grey};
  font-size: 30px;
  padding-top: 58px;
`;

const Paragraph = styled.p`
  width: 357px;
  height: 50px;
  display: block;
  margin: 0 auto;
  color: ${({ theme }) => theme.navy};
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: center;
`;

const OutlinedInput = styled(Input)`
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.navy};
  border: 1px solid;
  border-color: ${({ theme }) => theme.navy};
  font-size: 18px;
  &::placeholder {
    color: ${({ theme }) => theme.navy};
  }
`;

const PinkButton = styled(ActionButton)`
  background: ${({ theme }) => theme.pink};
  color: ${({ theme }) => theme.white};
`;

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
      password === "" ||
      email === "" ||
      name === "";

    return (
      <div>
        <Navigation />
        <Logo src="../static/wrapped_logo.png" alt="wrapped-logo" />
        {/*  <Header> Sign up</Header> */}
        <Container>
          <LeftBox />
          <RightBox>
            <SubHeader>Welcome to Wrapped!</SubHeader>
            <Paragraph>
              Let’s get you all set up so you can start finding the perfect gift
              for everyone on your list.
            </Paragraph>
            <Line />
            <form onSubmit={this.onSubmit}>
              <InputContainer>
                <OutlinedInput
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Full Name"
                />
                <OutlinedInput
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Email"
                />
                <OutlinedInput
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                />
                <OutlinedInput
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirm Password"
                />
              </InputContainer>
              <PinkButton disabled={isInvalid} type="submit">
                Sign Up
              </PinkButton>
              <Paragraph>
                Already have an account?{" "}
                <Link href={ROUTES.SIGN_IN.path}>{ROUTES.SIGN_IN.text}</Link>
              </Paragraph>
              {error && <p>{error.message}</p>}
            </form>
          </RightBox>
        </Container>
      </div>
    );
  }
}

export default withFirebase(Signup);
