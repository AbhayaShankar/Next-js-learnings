import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import { DUMMY_POSTS } from "../../../helpers/DummySinglePosts";

const PostContent = ({ post }) => {
  const { title, image, content, slug } = post;

  const imagePath = `/posts/${slug}/${image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
