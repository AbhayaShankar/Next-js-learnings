import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Abhaya:eZxG5or06nrJEbeD@cluster0.rcblahe.mongodb.net/newsletter?retryWrites=true&w=majority"
  );

  return client;
}

async function insertDocuments(client, documents) {
  const db = client.db();

  const result = await db.collection("comments").insertOne(documents);
  return result;
}

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the Database failed" });
    return;
  }

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
      client.close();
      return;
    }

    const newComment = {
      eventId: eventId,
      email,
      name,
      text,
    };

    let result;

    try {
      result = await insertDocuments(client, newComment);
      res
        .status(201)
        .json({ message: "This works perfectly", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "inserting Data failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const db = client.db();
      const documents = await db
        .collection("comments")
        .find()
        .sort({ _id: -1 })
        .toArray();
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting database failed!" });
    }
  }

  client.close();
}

export default handler;
