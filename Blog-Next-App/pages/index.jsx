import React, { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";

const HomePage = () => {
  const DUMMY_POSTS = [
    {
      title: "MY BLOG FOR NEXT JS",
      image: "1.avif",
      excerpt:
        "NEXTJS is the React framework for production - it makes building fullstack React apps and sites a breeze  and ships with built-in SSR/SSG.",
      date: "2023-05-02",
      slug: "getting-started-with-nextjs",
    },
    {
      title: "MY BLOG FOR NEXT JS",
      image: "2.jfif",
      excerpt:
        "NEXTJS is the React framework for production - it makes building fullstack React apps and sites a breeze  and ships with built-in SSR/SSG.",
      date: "2023-05-02",
      slug: "getting-started-with-nextjs2",
    },
    {
      title: "MY BLOG FOR NEXT JS",
      image: "1.jpg",
      excerpt:
        "NEXTJS is the React framework for production - it makes building fullstack React apps and sites a breeze  and ships with built-in SSR/SSG.",
      date: "2023-05-02",
      slug: "getting-started-with-nextjs3",
    },
    {
      title: "MY BLOG FOR NEXT JS",
      image: "1.jpg",
      excerpt:
        "NEXTJS is the React framework for production - it makes building fullstack React apps and sites a breeze  and ships with built-in SSR/SSG.",
      date: "2023-05-02",
      slug: "getting-started-with-nextjs4",
    },
    {
      title: "MY BLOG FOR NEXT JS",
      image: "1.jpg",
      excerpt:
        "NEXTJS is the React framework for production - it makes building fullstack React apps and sites a breeze  and ships with built-in SSR/SSG.",
      date: "2023-05-02",
      slug: "getting-started-with-nextjs5",
    },
    {
      title: "MY BLOG FOR NEXT JS",
      image: "1.avif",
      excerpt:
        "NEXTJS is the React framework for production - it makes building fullstack React apps and sites a breeze  and ships with built-in SSR/SSG.",
      date: "2023-05-02",
      slug: "getting-started-with-nextjs6",
    },
    {
      title: "MY BLOG FOR NEXT JS",
      image: "1.avif",
      excerpt:
        "NEXTJS is the React framework for production - it makes building fullstack React apps and sites a breeze  and ships with built-in SSR/SSG.",
      date: "2023-05-02",
      slug: "getting-started-with-nextjs7",
    },
  ];

  return (
    <Fragment>
      {/*  
      This Home Page will have 2 main sections:
         1. The Hero Section...
         2. The Featured Posts section. - For now we can show some dummy data, then we can move forward with linking in the future.
     */}
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
