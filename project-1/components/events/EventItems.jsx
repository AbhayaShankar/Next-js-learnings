import { useRouter } from "next/router";
import classes from "./EventItems.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

function EventItems({ title, id, location, image, date }) {
  const router = useRouter();

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const humanReadableAddress = location.replace(", ", "\n\n");

  // const handleNavigate = () => {
  //   console.log("HELLoooo");
  //   router.push(`/events/${id}`);
  // };

  return (
    <li className={classes.item} key={id}>
      <Image src={"/" + image} alt="" width={500} height={200} />
      <div className={classes.content}>
        <div className={classes.content}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{humanReadableAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Events</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItems;
