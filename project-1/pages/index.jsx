import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/EventList";
function HomePage({ featuredEvents }) {
  return (
    <div>
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
