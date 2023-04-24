const fs = require("fs/promises");
import path from "path";

import { Fragment } from "react";

function ProductDetailPage(props) {
  const { loadedProd } = props;

  if (!loadedProd) {
    return <p1>Loading...</p1>;
  }

  return (
    <Fragment>
      <title>Product Description Page</title>
      <h1>{loadedProd.title}</h1>
      <p>{loadedProd.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;
  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProd: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((prod) => prod.id);

  const params = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: params,
    fallback: true,

    // 1. fallback: 'blocking',
    // But in fallback : 'blocking'

    // This ensures that till the time all the data that needs to be displayed is not loaded it will not display anything on the screen... Different case scenarios diiifrenet methods can be used.

    // 2. fallback: true,
    // 2. Suppose you have a lot of data in products and manually or dynamically listing them out would be a difficult task even if you know many of the pages are not that frequently visited. Then pre-loading the data might be waste of time and resource. Since pre-loading data also takes time.

    //This is where fallback comes in play.

    // Fallback is a very handy tool which tells server that params inside paths arre to be pre-loaded and are of high priority but make sure that you stay active for other pages as well. This dont give us error for dynamic path generation. And helps geenarting pages only when visited.

    // In Fallback : true === we have to make sure to provide a fallback because since the data is not pre-loaded while accessing data, it is possible that the data you are trying to display is not available . SO for that we pass on a fallback fucntion.

    //Simple as :
    //  if(!products){
    //     return(
    //         <p>Loading...</p>
    //     )
    //  }
  };
}

export default ProductDetailPage;
