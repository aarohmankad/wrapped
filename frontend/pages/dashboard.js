import React, { Component } from 'react';
import router from 'next/router';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';

import CreateEvent from '../components/CreateEvent';
import EventList from '../components/EventList';
import Link from '../components/Link';
import Navigation from '../components/Navigation';
import SignoutButton from '../components/Button/SignoutButton';
import ROUTES from '../constants/ROUTES';
import { withFirebase } from '../components/Firebase';

const INITIAL_STATE = {
  events: [],
  loading: true,
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: row;
  overflow: hidden;
`;
const Sidebar = styled.div`
  width: 20vw;
  height: 100vh;
  max-height: 100vh;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.grey};
  text-align: center;
  padding-top: 22px;

  & p {
    margin: 10px;
  }

  & hr {
    margin-left: 15px;
    margin-right: 15px;
  }

  & .grow {
    flex-grow: 1;
  }

  & button.account {
    width: 80%;
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
    background: ${({ theme }) => theme.navy};
    border: none;
    border-radius: 20px;
    outline: none;
    color: ${({ theme }) => theme.white};
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }

  & button.signout {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: inherit;
    background: ${({ theme }) => theme.blue};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.white};
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }
`;
const Details = styled.div`
  flex-grow: 1;
  height: 100vh;
  background: ${({ theme }) => theme.navy};
  color: ${({ theme }) => theme.white};
  padding-left: 10vw;
  padding-top: 22px;
`;

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
        if (!eventData) {
          this.setState({ loading: false });
          return;
        }

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
    const { user } = this.props;
    const { loading, events } = this.state;
    const upcomingEvents = events.filter(
      event => new Date(event.date) > Date.now()
    );

    return (
      <Container>
        <Sidebar>
          <h2>Welcome, {user.name}!</h2>
          <p>You have {upcomingEvents.length} upcoming events.</p>
          <hr />
          <button
            className="account"
            onClick={() => router.push(ROUTES.ACCOUNT.path)}
          >
            {ROUTES.ACCOUNT.text}
          </button>
          <SignoutButton className="signout" />
        </Sidebar>
        <Details>
          <h2>Upcoming Events</h2>
          <CreateEvent />
          <EventList loading={loading} events={events} />
        </Details>
      </Container>
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
