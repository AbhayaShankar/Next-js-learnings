import fs from "fs";
import path from "path";

function handler(req, res) {
  const eventId = req.query.eventId;

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
    // const filePath = path.join(process.cwd(), "data", "comments.json");
    // const fileData = fs.readFileSync(filePath);
    // const data = JSON.parse(fileData);
    // data.push(newFeedback);
    // fs.writeFileSync(filePath, JSON.stringify(data));
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
}

export default handler;
