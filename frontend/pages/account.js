import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';

import ActionButton from '../components/Button/ActionButton';
import { withFirebase } from '../components/Firebase';

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class Account extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      ...INITIAL_STATE,
      email: props.user.email,
    };
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  updateEmail = () => {
    const { email } = this.state;
    this.props.firebase
      .doEmailUpdate(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE, email });
        // router.push(ROUTES.ACCOUNT.path);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  updatePassword = () => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        // router.push(ROUTES.ACCOUNT.path);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { user } = this.props;
    const { email, passwordOne, passwordTwo, error } = this.state;

    console.log(error);

    const emailNotModified = email === user.email;
    const passwordNotModified =
      passwordOne === '' || passwordTwo === '' || passwordOne != passwordTwo;

    return (
      <div>
        <h1>Your Account</h1>

        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <button disabled={emailNotModified} onClick={this.updateEmail}>
          Update Email
        </button>

        <form onSubmit={this.updatePassword}>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="New Password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />

          <button disabled={passwordNotModified} type="submit">
            Update Password
          </button>
        </form>

        {error && <p>{error.message}</p>}
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
)(Account);
