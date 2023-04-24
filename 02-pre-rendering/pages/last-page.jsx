import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalePage() {
  const [sales, setSales] = useState();
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     // Fetching data from the server.
  //     getSalesData();
  //   }, []);

  const { data, error } = useSWR(
    "https://next-js-45b5e-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (!!data) {
      const transformedData = [];

      for (const key in data) {
        transformedData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedData);
    }
  }, [data]);

  //   async function getSalesData() {
  //     setLoading(true);
  //     try {
  //       const res = await fetch(
  //         "https://next-js-45b5e-default-rtdb.firebaseio.com/sales.json"
  //       );

  //       if (!res.ok) {
  //         throw new Error("Failed to fetch data");
  //       }

  //       const data = await res.json();
  //       console.log(data);

  //       const transformedData = [];

  //       for (const key in data) {
  //         transformedData.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(transformedData);
  //       console.log("t-sales", sales);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   }

  //   if (!sales) {
  //     return <p>No data yet</p>;
  //   }

  // useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))

  if (error) {
    return <p>No data yet</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalePage;
