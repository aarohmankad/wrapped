import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../components/Firebase';

const INITIAL_STATE = {
  name: '',
  date: '',
  ideas: [],
  modalIsOpen: false,
};

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
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    // console.log(this.props.user);
    const { name, date, ideas } = this.state;
    this.props.firebase.events().push({
      name,
      date,
      ideas,
      createdBy: this.props.user.uid,
    });
    this.setState({ ...INITIAL_STATE });
    this.closeModal();
  };

  render() {
    const { name, date, ideas } = this.state;
    const isInvalid = !name || !date;

    return (
      <div>
        <button onClick={this.openModal}>Create Event</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Event Modal"
          ariaHideApp={false}
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            Make a Special Day
          </h2>
          <button onClick={this.closeModal}>x</button>
          <form onSubmit={this.onSubmit}>
            <input
              name="name"
              value={name}
              onChange={this.onChange}
              type="text"
              placeholder="Who's Special Day Is It?"
            />

            <label htmlFor="date">When Is The Special Day?</label>
            <input
              name="date"
              value={date}
              onChange={this.onChange}
              type="date"
            />

            <button disabled={isInvalid} type="submit">
              Make {name ? `${name}'s ` : 'Their '} Day
            </button>
          </form>
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
  connect(
    mapStateToProps,
    null
  )
)(CreateEvent);
