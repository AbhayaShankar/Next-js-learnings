import { useRouter } from "next/router";

function CLientSInglePage() {
  const router = useRouter();

  console.log(router.query);

  const handleCLick = () => {
    // fucntion xyz handling and then naviagtion

    router.push("/clients/abhaya/projecta");
  };

  return (
    <div>
      <h1>SIngle Client Page</h1>
      <button onClick={handleCLick}>Load projects</button>
    </div>
  );
}

export default CLientSInglePage;
