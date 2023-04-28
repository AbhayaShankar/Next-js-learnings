import Link from "next/link";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/EventList";
import { Fragment, useEffect, useState } from "react";
import EventsSearch from "../../components/events/EventSearch";

function EventsPage({ events }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const findSelectedEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findSelectedEvents} />
      {!loading ? (
        <EventList featuredEvents={events} />
      ) : (
        <div
          style={{
            fontSize: "40px",
            textAlign: "center",
            letterSpacing: "2px",
            height: "100%",
            marginTop: "200px ",
          }}
        >
          <h1>Loading...</h1>
        </div>
      )}
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 30,
  };
}

export default EventsPage;
