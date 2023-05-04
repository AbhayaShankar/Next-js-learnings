import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import Image from "next/image";

const PostContent = ({ post }) => {
  const { title, image, content, slug } = post;

  const imagePath = `/posts/${slug}/${image}`;

  console.log(slug);

  const customRenderers = {
    image(image) {
      return (
        <Image
          src={`/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={300}
          height="auto"
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
