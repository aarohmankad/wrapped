import React, { Component } from 'react';
import {
  sortableContainer,
  sortableElement,
  arrayMove,
} from 'react-sortable-hoc';
import { compose } from 'recompose';
import styled, { withTheme } from 'styled-components';

import Input from './Input';
import { withFirebase } from '../components/Firebase';

const StyledEventListItem = styled.div`
  background: ${({ theme }) => theme.white};
  max-width: 380px;
  min-height: 200px;
  color: ${({ theme }) => theme.grey};
  padding: 20px;
  border-radius: 20px;
  margin-top: 25px;

  & a {
    color: ${({ theme }) => theme.grey};
    text-decoration: none;
    border-bottom: 1.5px solid ${({ theme }) => theme.pink};
  }

  & div.list {
    padding: 0;

    & div.list-handle {
      width: 18px;
      height: 11px;
      position: relative;
      top: 1px;
      display: block;
      margin-right: 20px;
      opacity: 0.25;
      background: linear-gradient(
        180deg,
        #000,
        #000 20%,
        #fff 0,
        #fff 40%,
        #000 0,
        #000 60%,
        #fff 0,
        #fff 80%,
        #000 0,
        #000
      );
    }

    & div.list-item {
      padding: 7px;
      padding-left: 0px;
    }
  }
`;

const SortableItem = sortableElement(({ value }) => (
  <div className="list-item">
    <a href={value}>{value}</a>
  </div>
));
const SortableList = sortableContainer(({ items }) => {
  return (
    <div className="list">
      {items.map((item, index) => (
        <SortableItem key={`item-${index}`} index={index} value={item} />
      ))}
    </div>
  );
});

const INITIAL_STATE = {
  new_idea: '',
};
class AddListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onKeyPress = event => {
    if (event.key !== 'Enter') return;

    this.props.firebase
      .event(this.props.uid)
      .update({ ideas: [...this.props.ideas, event.target.value] });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { new_idea } = this.state;
    return (
      <Input
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        name="new_idea"
        value={new_idea}
        background={this.props.theme.pink}
        spacing="0px"
        width="100%"
      />
    );
  }
}

class EventListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props.event, fetching: false };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { ideas } = this.state;
    const updatedIndices = {
      ideas: arrayMove(ideas, oldIndex, newIndex),
    };

    this.setState(() => updatedIndices);
    this.props.firebase.events(this.state.uid).update(updatedIndices);
  };

  render() {
    const { name, date, ideas, uid, fetching } = this.state;

    if (fetching) {
      return null;
    }

    return (
      <StyledEventListItem>
        <h2>{name}'s Special Day</h2>
        <p>{date}</p>
        <p>Some of your ideas:</p>
        {ideas && ideas.length && (
          <SortableList items={ideas} onSortEnd={this.onSortEnd} />
        )}

        <AddListItem
          firebase={this.props.firebase}
          theme={this.props.theme}
          ideas={ideas}
          uid={uid}
        />
      </StyledEventListItem>
    );
  }
}

export default compose(
  withFirebase,
  withTheme
)(EventListItem);
