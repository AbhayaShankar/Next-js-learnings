import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://Abhaya:eZxG5or06nrJEbeD@cluster0.rcblahe.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    // Server-side validation check...
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Inputs" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    const db = client.db();

    await db
      .collection("comments")
      .insertOne({ email: email, name: name, text: text });

    console.log(newComment);

    res
      .status(201)
      .json({ message: "This works perfectly", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Abhaya", text: "Abhaya learning NEXTjs" },
      { id: "c2", name: "Shanky", text: "Shanky going to Japan" },
      { id: "c3", name: "Dani", text: "Dani loves Web Development" },
    ];

    res.status(200).json({ comments: dummyList });
  }

  client.close();
}

export default handler;
