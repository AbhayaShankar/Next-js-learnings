import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Abhaya:eZxG5or06nrJEbeD@cluster0.rcblahe.mongodb.net/newsletter?retryWrites=true&w=majority"
  );

  return client;
}

async function insertDocuments(client, documents) {
  const db = client.db();

  await db.collection("newsletter").insertOne(documents);
}

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email property" });
      return;
    }

    const newNewsletter = {
      id: new Date().toISOString(),
      email: email,
    };

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the Database failed" });
      return;
    }

    try {
      await insertDocuments(client, { email: email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "inserting Data failed" });
      return;
    }

    // console.log(newNewsletter);
    res.status(201).json({ message: "Success" });
  }
}

export default handler;
