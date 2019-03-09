const EventList = ({ loading, events }) => {
  if (loading) {
    return <p>...</p>;
  }

  if (!events.length) {
    return <p>Make someone's day!</p>;
  }

  console.log(events);

  return (
    <div>
      {events.map(event => (
        <p key={event.uid}>Event</p>
      ))}
    </div>
  );
};

export default EventList;
