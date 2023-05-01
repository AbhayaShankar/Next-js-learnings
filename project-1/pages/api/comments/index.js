import fs from "fs";
import path from "path";

function CommentsHandler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const Comment = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      name: name,
      text: Comment,
    };
    const filePath = path.join(process.cwd(), "data", "comments.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res
      .status(201)
      .json({ message: "This works perfectly", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "Hello there!" });
  }
}

export default CommentsHandler;
