import { useRouter } from "next/router";

const UserPortfolioPage = () => {
  const router = useRouter();

  console.log("pathname", router.pathname);
  console.log("query", router.query);

  // we can then send a request to the backend server to fetch the value or the pievce of data with an id of router.query.portfolio

  return <div>User Portfolio Page</div>;
};

export default UserPortfolioPage;
