import Head from "next/head";

function ErrorPage() {
  return (
    <div className="center">
      <Head>
        <title>Error Page</title>
        <meta
          name="decsription"
          content="Oops, there seems to be unexpected error."
        />
      </Head>
      <p
        style={{
          fontSize: "48px",
          fontWeight: "700",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "10px",
          borderRadius: "12px",
          boxShadow: "1px 1px 10px 4px rgba(0,0,0,0.2)",
          color: "#CC2936",
          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
        }}
      >
        OOOPSIIEEESSS!!! Something went wrong..
      </p>
      <p>Abhishek Bgahe</p>
    </div>
  );
}

export default ErrorPage;
