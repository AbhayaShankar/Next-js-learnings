import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  console.log(filterData);

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  return (
    <div>
      <h1>Filtered Event Page</h1>
    </div>
  );
}

export default FilteredEventsPage;
