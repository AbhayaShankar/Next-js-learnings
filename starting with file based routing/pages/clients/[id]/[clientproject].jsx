import { useRouter } from "next/router";

function SingleCLieentProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>Single CLient Project page</h1>
    </div>
  );
}

export default SingleCLieentProjectPage;
