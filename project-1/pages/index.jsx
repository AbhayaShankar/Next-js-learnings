import { useRouter } from "next/router";
import Link from "next/link";

function HomePage() {
  const router = useRouter();

  const handleNavigate = () => {
    console.log("HELLoooo");
    router.push("/events");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigate}>Checkout Events</button>
    </div>
  );
}

export default HomePage;
