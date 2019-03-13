import React from 'react';

import EventListItem from './EventListItem';

const EventList = ({ loading, events }) => {
  if (loading) {
    return <p>...</p>;
  }

  if (!events.length) {
    return <p>Make someone's day!</p>;
  }

  return (
    <div>
      {events.map(event => (
        <EventListItem key={event.uid} event={event} />
      ))}
    </div>
  );
};

export default EventList;
