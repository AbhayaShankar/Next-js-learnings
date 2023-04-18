const fs = require("fs/promises");
import path from "path";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  // const { id, title } = products;

  return (
    <ul>
      {products.map((prod) => (
        <li key={prod.id}>
          <Link href={`/${prod.id}`}>{prod.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// This code will run first and then it will prepare the props for the HomePage which then will use those props to display on web page.
// Since this is an Async fucntion it will not allow other funtion to run before it has completed.

// IMPORTANT NOTE: getStaticProps will always return an OBJECT...which has a props and then it can have whatever you need for the data to display
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    // notFound: false,
  };
}

export default HomePage;
