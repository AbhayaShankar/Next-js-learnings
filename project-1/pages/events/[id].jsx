import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import ErrorPage from "../404";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { Fragment } from "react";

function EventDetailPage({ filterEvents }) {
  const event = filterEvents;

  if (!event) {
    return <ErrorPage />;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.id;
  const filterEvents = await getEventById(eventId);
  return {
    props: {
      filterEvents: filterEvents,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
}

export default EventDetailPage;
