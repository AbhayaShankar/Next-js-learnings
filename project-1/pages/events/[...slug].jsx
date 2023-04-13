import { useRouter } from "next/router";
import { getFilteredEvents } from "../../Dummydata";
import EventList from "../../components/events/EventList";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  console.log(filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2028 ||
    numYear < 2020 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <p className="center">
        Invalid Filter... Please enter Year below 2028 and after 2020...
      </p>
    );
  }

  const filterEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // For events not found in the data, I would want to return a message for events not found in the database or no proper match for the filter applied.

  if (!filterEvents || filterEvents.length === 0) {
    return (
      <p className="center">
        events not found in the database or no proper match for the filter
        applied.
      </p>
    );
  }

  return (
    <div>
      <EventList featuredEvents={filterEvents} />
    </div>
  );
}

export default FilteredEventsPage;
