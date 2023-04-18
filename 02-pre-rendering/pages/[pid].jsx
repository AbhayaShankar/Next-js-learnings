const fs = require("fs/promises");
import path from "path";

import { Fragment } from "react";

function ProductDetailPage(props) {
  const { loadedProd } = props;
  return (
    <Fragment>
      <title>Product Description Page</title>
      <h1>{loadedProd.title}</h1>
      <p>{loadedProd.description}</p>;
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProd: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      //   { params: { pid: "p2" } },
      //   { params: { pid: "p3" } },
    ],

    fallback: true,
    // Suppose you have a lot of data in products and manually or dynamically listing them out would be a difficult task even if you know many of the pages are not that frequently visited. Then pre-loading the data might be waste of time and resource. Since pre-loading data also takes time.

    //This is where fallback comes in play.

    // Fallback is a very handy tool which tells server that params inside paths arre to be pre-loaded and are of high priority but make sure that you stay active for other pages as well. This dont give us error for dynamic path generation. And helps geenarting pages only when visited.
  };
}

export default ProductDetailPage;
