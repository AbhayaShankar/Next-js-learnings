import React, { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-utils";

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      {/*  
      This Home Page will have 2 main sections:
         1. The Hero Section...
         2. The Featured Posts section. - For now we can show some dummy data, then we can move forward with linking in the future.
     */}
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 6000,
  };
}

export default HomePage;
