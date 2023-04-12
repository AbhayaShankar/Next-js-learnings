import EventItems from "./EventItems";

function EventList({ featuredEvents }) {
  return (
    <ul>
      {featuredEvents.map((event) => (
        <div key={event.id}>
          {console.log(event)}
          <EventItems
            title={event.title}
            id={event.id}
            location={event.location}
            image={event.image}
            date={event.date}
          />
        </div>
      ))}
    </ul>
  );
}

export default EventList;
