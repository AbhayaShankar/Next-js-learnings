import Link from "next/link";

function ClientPage() {
  const clientsArr = [
    { id: "abhaya", name: "Abhaya" },
    { id: "harshit", name: "Harshit" },
    { id: "vivek", name: "Vivek" },
  ];

  return (
    <div>
      <h1>CLient Page</h1>
      <ul>
        {clientsArr.map((item) => (
          <li key={item.id}>
            {/* Two ways of creating a Link segment, we can give pathname and query
            value to the link instead of the long string value */}

            {/* <Link href={`/clients/${item.id}`}>{item.name}</Link> */}

            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: item.id },
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
