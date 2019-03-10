import React from 'react';
import styled from 'styled-components';

const EventListItem = styled.div`
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
`;

export default ({ event }) => {
  return (
    <EventListItem>
      <h2>{event.name}'s Special Day</h2>
      <p>{event.date}</p>
      <p>Some of your ideas:</p>
      <ul>
        {event.ideas &&
          event.ideas.length &&
          event.ideas.map(idea => (
            <li key={idea}>
              <a href={idea}>{idea}</a>
            </li>
          ))}
      </ul>
    </EventListItem>
  );
};
