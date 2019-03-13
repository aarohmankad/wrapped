import React, { Component } from 'react';
import {
  SortableContainer,
  SortableElement,
  sortableHandle,
  arrayMove,
} from 'react-sortable-hoc';
import styled from 'styled-components';

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

  & ul {
    list-style-type: none;
  }
`;

const DragHandle = sortableHandle(() => <span>::</span>);
const SortableItem = SortableElement(({ value }) => (
  <li>
    <DragHandle />
    {value}
  </li>
));
const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <SortableItem key={`item-${index}`} index={index} value={item} />
      ))}
    </ul>
  );
});

class EventListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props.event };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ ideas }) => ({
      ideas: arrayMove(ideas, oldIndex, newIndex),
    }));
  };

  render() {
    const { name, date, ideas } = this.state;

    return (
      <StyledEventListItem>
        <h2>{name}'s Special Day</h2>
        <p>{date}</p>
        <p>Some of your ideas:</p>
        <ul>
          {ideas && ideas.length && (
            <SortableList items={ideas} onSortEnd={this.onSortEnd} />
          )}
        </ul>
      </StyledEventListItem>
    );
  }
}

export default EventListItem;
