export async function getAllEvents() {
  const res = await fetch(
    "https://next-js-45b5e-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();
  console.log(data);

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}