import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config;

const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`The system is running on port: ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  console.log("All is OKAY");
});
