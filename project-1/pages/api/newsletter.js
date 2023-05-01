import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

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
