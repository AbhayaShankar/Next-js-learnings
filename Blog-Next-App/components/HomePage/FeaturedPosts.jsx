import React from "react";
import classes from "./FeaturedPosts.module.css";
import PostGrid from "../posts/PostGrid";

const FeaturedPosts = () => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid />
    </section>
  );
};

export default FeaturedPosts;
