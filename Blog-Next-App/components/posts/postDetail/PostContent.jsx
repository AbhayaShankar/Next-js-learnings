import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { md, sanitize } from "../../../helpers/markdown-it";

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

    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/posts/${slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code({ language, value }) {
      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {value}
        </SyntaxHighlighter>
      );
    },
  };

  const displayContent = md.render(content);

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown
        className={classes.markdownContent}
        components={customRenderers}
        // renderers={customRenderers}
        children={content}
      />
      <div> {displayContent} </div>
    </article>
  );
};

export default PostContent;
