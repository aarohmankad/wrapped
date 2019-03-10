import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled, { withTheme } from 'styled-components';

import ActionButton from './Button/ActionButton';
import email from '../services/email';
import { withFirebase } from '../components/Firebase';
import Input from './Input';
import Textarea from './Textarea';

const INITIAL_STATE = {
  name: '',
  date: '',
  ideas: [],
  reminder: '',
  modalIsOpen: false,
};

const CreateEventButton = styled.div`
  background: ${({ theme }) => theme.pink};
  max-width: 380px;
  min-height: 100px;
  color: ${({ theme }) => theme.white};
  padding: 20px;
  border-radius: 20px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  cursor: pointer;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & button.closeModal {
    position: absolute;
    right: 25px;
    background: none;
    border: none;
    outline: none;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 40%;

    & input,
    & label,
    & textarea,
    & button {
      margin-top: 30px;
    }

    & label {
      margin-bottom: -30px;
    }
  }
`;

class CreateEvent extends Component {
  constructor() {
    super();

    this.state = {
      ...INITIAL_STATE,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onChange = event => {
    if (event.target.name === 'ideas') {
      this.setState({
        [event.target.name]: event.target.value.split(','),
      });
      return;
    }

    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = e => {
    const { name, date, ideas, reminder } = this.state;
    const event = {
      name,
      date,
      ideas,
      reminder,
      createdBy: this.props.user.uid,
    };

    this.props.firebase.events().push(event);
    email.schedule({ ...event, gifter: this.props.user.email });
    this.setState({ ...INITIAL_STATE });
    this.closeModal();
  };

  render() {
    const { name, date, ideas, reminder } = this.state;
    const isInvalid = !name || !date || !reminder;

    return (
      <div>
        <CreateEventButton onClick={this.openModal}>+</CreateEventButton>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Event Modal"
          ariaHideApp={false}
        >
          <ModalContent>
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              Make a Special Day
            </h2>
            <button className="closeModal" onClick={this.closeModal}>
              x
            </button>
            <form onSubmit={this.onSubmit}>
              <Input
                name="name"
                value={name}
                onChange={this.onChange}
                type="text"
                placeholder="Who's Special Day Is It?"
                color={this.props.theme.grey}
                border={`1px solid ${this.props.theme.grey}`}
                spacing="none"
                width="100%"
              />

              <label htmlFor="date">When Is The Special Day?</label>
              <Input
                name="date"
                value={date}
                onChange={this.onChange}
                type="date"
                color={this.props.theme.grey}
                border={`1px solid ${this.props.theme.grey}`}
                spacing="none"
                width="100%"
              />

              <label htmlFor="ideas">Do You Have Any Ideas?</label>
              <Textarea
                name="ideas"
                value={ideas.join(',')}
                onChange={this.onChange}
                placeholder="A Dash of This, A Sprinkle of That"
                color={this.props.theme.grey}
                border={`1px solid ${this.props.theme.grey}`}
                spacing="none"
                width="100%"
              />

              <label htmlFor="reminder">When Would You Like A Reminder?</label>
              <Input
                name="reminder"
                value={reminder}
                onChange={this.onChange}
                type="date"
                color={this.props.theme.grey}
                border={`1px solid ${this.props.theme.grey}`}
                spacing="none"
                width="100%"
              />

              <ActionButton disabled={isInvalid} type="submit">
                Make {name ? `${name}'s ` : 'Their '} Day
              </ActionButton>
            </form>
          </ModalContent>
        </Modal>
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
  withTheme,
  connect(
    mapStateToProps,
    null
  )
)(CreateEvent);
