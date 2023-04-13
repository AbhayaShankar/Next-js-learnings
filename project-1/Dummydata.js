const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "media/1.webp",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "media/2.webp",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "media/3.webp",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Friendship is Happiness",
    description:
      "We all remember the first friend of our life or perhaps the bestfriends of yours, The relation is far greater than any jewel or money, it's not based on any presumptions",
    location: "My Coast way, 105 Backstreet Bay",
    date: "2023-01-02",
    image: "media/4.jpg",
    isFeatured: false,
  },
  {
    id: "e5",
    title: "The city of Love - Paris",
    description:
      "A dream place to visit for all love birds, the city of Romance in front of the Iconic structure THE EIFFEL TOWER",
    date: "2025-06-05",
    location: "My Coast way, 105 Backstreet Bay",
    image: "media/5.jpg",
    isFeatured: true,
  },
  {
    id: "e6",
    title: "Grocery with Bike",
    description:
      "When you got your favorite bike and you wanna flex, SO you take every where you go... Me going grocery shopping with my HAYABUSA 😂",
    date: "2024-11-024",
    location: "My Coast way, 105 Backstreet Bay",
    image: "media/6.jpg",
    isFeatured: false,
  },
  {
    id: "e7",
    title: "A Coffee Person",
    description:
      "Not sure for everyone but I am a coffee person and I love nothing more than waking up with a coffee in my bed, Sooths me out and I would marry someone who can do this to me...🤩",
    location: "My Coast way, 105 Backstreet Bay",
    date: "2028-10-20",
    image: "media/7.jpg",
    isFeatured: true,
  },
  {
    id: "e8",
    title: "A Dream place - for me",
    description:
      "Japan, the place where heaven lies, The beautiful city and the eyecatching streets where I would love to visit atleast once in my entire Life span. You should tooo",
    date: "2026-12-19",
    location: "My Coast way, 105 Backstreet Bay",
    image: "media/8.jpg",
    isFeatured: false,
  },
  {
    id: "e9",
    title: "Mount Fuji",
    description:
      "One of the classy mountain view one can ever see - The Mount Fuji , Japan. You can seem to just sit for hours and watch the view. That's just the place Mount Fuji iss...",
    location: "My Coast way, 105 Backstreet Bay",
    date: "2027-2-9",
    image: "media/9.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
