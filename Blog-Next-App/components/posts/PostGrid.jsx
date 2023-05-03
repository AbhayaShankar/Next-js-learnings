import React from "react";
import PostItem from "./PostItem";
import classes from "./PostGrid.module.css";

const PostGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {/* {posts.map((post) => ( */}
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      {/* ))} */}
    </ul>
  );
};

export default PostGrid;
