import EventItems from "./EventItems";
import classes from "./EventList.module.css";

function EventList({ featuredEvents }) {
  return (
    <ul className={classes.list}>
      {featuredEvents.map((event) => (
        <div key={event.id}>
          {/* {console.log(event)} */}
          <EventItems
            key={event.id}
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
