import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/EventList";
function HomePage({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>Events App</title>
        <meta
          name="decsription"
          content="Find featured events of most liked places you wanna visit."
        />
      </Head>
      <EventList featuredEvents={featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
