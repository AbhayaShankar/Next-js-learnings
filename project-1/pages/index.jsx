import { getFeaturedEvents } from "../Dummydata";
import EventList from "../components/events/EventList";
function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList featuredEvents={featuredEvents} />
    </div>
  );
}

export default HomePage;
