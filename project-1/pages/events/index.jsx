import Link from "next/link";
import { getAllEvents } from "../../Dummydata";
import EventList from "../../components/events/EventList";
import { useEffect, useState } from "react";
function EventsPage() {
  const [loading, setLoading] = useState(true);
  const events = getAllEvents();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  if (loading) {
    return (
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
    );
  }

  return (
    <div>
      {!loading && <EventList featuredEvents={events} />}
      {/* <Link
        href={{
          pathname: "/events/[id]",
          query: { id: "id" },
        }}
      >
        <button
          style={{
            color: "white",
            backgroundColor: "#212121",
            padding: "8px 15px",
            borderRadius: "12px",
            letterSpacing: "0.8px",
            marginTop: "20px",
          }}
        >
          Read More 👉🚀
        </button>
      </Link> */}
    </div>
  );
}

export default EventsPage;
