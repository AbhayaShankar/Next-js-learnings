import React from "react";
import classes from "./FeaturedPosts.module.css";
import PostGrid from "../posts/PostGrid";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
