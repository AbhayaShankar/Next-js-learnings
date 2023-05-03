import React from "react";
import classes from "./PostItem.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = () => {
  return (
    <li className={classes.post}>
      <Link href="/">
        <div className={classes.image}>
          <Image
            src="/posts/1.avif"
            alt="Blog-image"
            width={250}
            height={250}
          />
        </div>
        <div className={classes.content}>
          <time>May 3rd 2023</time>
          <h3>TITLE OF THE BLOG</h3>
          <p>
            Basic Description of the blog in about 15-20 words not too much not
            too less...
          </p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
