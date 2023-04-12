import { useRouter } from "next/router";

function EventItems({ title, id, location, image, date }) {
  const router = useRouter();

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const humanReadableAddress = location.replace(", ", "\n\n");

  const handleNavigate = () => {
    console.log("HELLoooo");
    router.push(`/events/${id}`);
  };

  return (
    <li key={id}>
      <img src={"/" + image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{humanReadableAddress}</address>
          </div>
        </div>
        <div>
          <button onClick={handleNavigate}>Checkout Event</button>
        </div>
      </div>
    </li>
  );
}

export default EventItems;
