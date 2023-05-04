import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import Image from "next/image";

const PostContent = ({ post }) => {
  const { title, image, content, slug } = post;

  const imagePath = `/posts/${slug}/${image}`;
  // console.log(slug);

  const customRenderers = {
    image(image) {
      console.log("md Image slug", slug);
      return (
        <Image
          src={`/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={300}
          height={300}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown
        className={classes.markdownContent}
        components={customRenderers}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
