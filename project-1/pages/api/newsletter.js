import { MongoClient } from "mongodb";
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

    const client = await MongoClient.connect(
      "mongodb+srv://Abhaya:eZxG5or06nrJEbeD@cluster0.rcblahe.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    await db.collection("emails").insertOne({ email: email });

    client.close();

    console.log(newNewsletter);
    res.status(201).json({ message: "Success" });
  }
}

export default handler;
