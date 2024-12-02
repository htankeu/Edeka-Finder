import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { dataSource } from "./dataSource";

dotenv.config;

const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;
const db_port: number = Number(process.env.DB_PORT) || 5432;

app.listen(port, () => {
  dataSource
    .initialize()
    .then(() => {
      console.log(`The database is initializing on port: ${db_port}`);
      console.log(`The system is running on port: ${port}`);
    })
    .catch((error: any) => {
      console.error("Error by the initialization");
    });
});

app.get("/", (req: Request, res: Response) => {
  console.log("All is OKAY");
});
