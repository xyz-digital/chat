import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Message } from "./models/Message";

run();

async function run() {
  const app = express();
  const port = 8000;

  dotenv.config();

  const dbUri = process.env.DB_URI
    ? process.env.DB_URI
    : "mongodb://localhost:27017/chat";

  await mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use(express.json())

  app.post("/api/rooms/:id/messages", async (req, res) => {
    console.log(req.body)

    const message = await Message.create({
      ...req.body,
    });

    return res.json({
      data: message,
    });
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
