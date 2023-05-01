import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { React, Fragment, useEffect, useState } from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import useSWR from "swr";
import Head from "next/head";

function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();
  const filterData = router.query.slug;

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://next-js-45b5e-default-rtdb.firebaseio.com/events.json",
    fetcher
  );

  console.log(data);

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  let pageHeader = (
    <Head>
      <title>Filtered Events</title>
      <meta name="decsription" content="A list of filtered events" />
    </Head>
  );

  if (!loadedEvents && !error) {
    return (
      <Fragment>
        {pageHeader}
        <p
          className="center"
          style={{
            marginBottom: "30px",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          Loading...
        </p>
      </Fragment>
    );
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  pageHeader = (
    <Head>
      <title>
        Filtered Events {numMonth}/{numYear}
      </title>
      <meta
        name="decsription"
        content={`filtered events for ${numMonth}/${numYear}`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2028 ||
    numYear < 2020 ||
    numMonth > 12 ||
    numMonth < 1 ||
    error
  ) {
    return (
      <Fragment>
        {pageHeader}
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

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  // const filterEvents = events;

  // For events not found in the data, I would want to return a message for events not found in the database or no proper match for the filter applied.

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {pageHeader}
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
      {pageHeader}
      <ResultsTitle date={date} />
      <EventList featuredEvents={filteredEvents} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const filterData = params.slug;

//   const filterYear = filterData[0];
//   const filterMonth = filterData[1];

//   const numYear = +filterYear;
//   const numMonth = +filterMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2028 ||
//     numYear < 2020 ||
//     numMonth > 12 ||
//     numMonth < 1
//   ) {
//     return {
//       props: {
//         hasError: true,
//       },
//       // notFound: true,
//       // We can redirect the page if we have any errror page defined.
//       // redirect: {
//       //   destination: "/error"
//       // }
//     };
//   }

//   const filterEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filterEvents,
//       DATE: {
//         YEAR: numYear,
//         MONTH: numMonth,
//       },
//     },
//   };
// }

export default FilteredEventsPage;
