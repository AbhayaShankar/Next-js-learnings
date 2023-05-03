import React from "react";
import classes from "./PostItem.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href="/posts/first">
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={250} height={250} />
        </div>
        <div className={classes.content}>
          <time>{formattedDate}</time>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
