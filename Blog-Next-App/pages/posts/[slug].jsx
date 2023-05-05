import React from "react";
import PostContent from "../../components/posts/postDetail/PostContent";
import { getPostsData, getPostsFiles } from "../../lib/posts-utils";

const SinglePostPage = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostsData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking",
  };
}

export default SinglePostPage;
