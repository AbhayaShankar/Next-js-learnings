import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import ErrorPage from "../404";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { Fragment } from "react";
import Head from "next/head";
import Comments from "../../components/input/comments";

function EventDetailPage({ filterEvents }) {
  const event = filterEvents;

  if (!event) {
    return <ErrorPage />;
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title} Events</title>
        <meta name="decsription" content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
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
