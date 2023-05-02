import Layout from "../components/layout/layout";
import Notification from "../components/notification/notification";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <Notification
        title={"Comments Submitted"}
        message={"Comments successfully submitted to MongoDB"}
        status={"failed"}
      />
    </Layout>
  );
}

export default MyApp;
