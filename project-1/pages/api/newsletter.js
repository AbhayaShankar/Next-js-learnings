import fs from "fs";
import path from "path";

function handler(req, res) {
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

    // const filePath = path.join(process.cwd(), "data", "newsletter.json");
    // const fileData = fs.readFileSync(filePath);
    // const data = JSON.parse(fileData);
    // data.push(newNewsletter);
    // fs.writeFileSync(filePath, JSON.stringify(data));

    console.log(newNewsletter);
    res.status(201).json({ message: "Success" });
  }
}

export default handler;
