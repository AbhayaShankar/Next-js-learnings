import { useRouter } from "next/router";
import { getFilteredEvents } from "../../Dummydata";
import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  console.log(filterData);

  if (!filterData) {
    return (
      <p
        style={{
          marginBottom: "30px",
          fontSize: "28px",
          fontWeight: "700",
        }}
      >
        Loading...
      </p>
    );
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
      <Fragment>
        <div className="center">
          <p
            style={{
              marginBottom: "30px",
              fontSize: "20px",
              fontWeight: "700",
              letterSpacing: 0.25,
            }}
          >
            Invalid Filter... Please enter Year below 2028 and after 2020...
            <br />
            If not then kindly check if Month is correctly entered .
          </p>
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filterEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // For events not found in the data, I would want to return a message for events not found in the database or no proper match for the filter applied.

  if (!filterEvents || filterEvents.length === 0) {
    return (
      <Fragment>
        <div className="center">
          <p
            style={{
              marginBottom: "30px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            events not found in the database or no proper match for the filter
            applied.
          </p>
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList featuredEvents={filterEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
