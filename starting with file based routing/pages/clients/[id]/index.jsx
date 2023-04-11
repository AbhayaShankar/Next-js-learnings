import { useRouter } from "next/router";

function CLientSInglePage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>SIngle Client Page</h1>
    </div>
  );
}

export default CLientSInglePage;
