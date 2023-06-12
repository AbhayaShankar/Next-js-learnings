import React from "react";
// import PostGrid from "../../components/posts/PostGrid";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-utils";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
