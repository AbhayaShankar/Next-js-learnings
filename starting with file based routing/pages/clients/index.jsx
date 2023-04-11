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
            <Link href={`/clients/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
