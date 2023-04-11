import { useRouter } from "next/router";
import Link from "next/link";

function EventsPage() {
  const router = useRouter();

  //   const openEventDetail = () => {
  //     router.push("/events/[id]");
  //   };
  return (
    <div>
      <h1>Main Events Page</h1>
      <Link
        href={{
          pathname: "/events/[id]",
          query: { id: "id" },
        }}
      >
        <button
          //   onClick={openEventDetail}
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
      </Link>
    </div>
  );
}

export default EventsPage;
