import React, { Component } from 'react';
import {
  sortableContainer,
  sortableElement,
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
      display: inline-block;
    }
  }
`;

const DragHandle = sortableHandle(() => <div className="list-handle" />);
const SortableItem = sortableElement(({ value }) => (
  <div>
    <DragHandle />
    <div className="list-item">
      <a href={value.url}>{value.title}</a>
    </div>
  </div>
));
const SortableList = sortableContainer(({ items }) => {
  console.log(items);
  return (
    <div className="list">
      {items.map((item, index) => (
        <SortableItem key={`item-${index}`} index={index} value={item} />
      ))}
    </div>
  );
});

class EventListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props.event, fetching: true };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ ideas }) => ({
      ideas: arrayMove(ideas, oldIndex, newIndex),
    }));
  };

  render() {
    const { name, date, ideas, fetching } = this.state;

    if (fetching) {
      return null;
    }

    return (
      <StyledEventListItem>
        <h2>{name}'s Special Day</h2>
        <p>{date}</p>
        <p>Some of your ideas:</p>
        {ideas && ideas.length && (
          <SortableList
            items={ideas}
            onSortEnd={this.onSortEnd}
            useDragHandle
          />
        )}
      </StyledEventListItem>
    );
  }
}

export default EventListItem;
