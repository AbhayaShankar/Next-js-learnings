import React from "react";
// import PostGrid from "../../components/posts/PostGrid";
import { DUMMY_POSTS } from "../../helpers/DummyText";
import AllPosts from "../../components/posts/AllPosts";

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
