import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { dataSource } from "./dataSource";
import "reflect-metadata";
import { indexRouter } from "./Routes/index.Router";
import raysMigration from "./Migrations/MRay";
import racksMigration from "./Migrations/MRack";
import categoriesMigration from "./Migrations/MCategory";
import productsMigration from "./Migrations/MProduct";

dotenv.config();

const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;
const db_port: number = Number(process.env.DB_PORT) || 5432;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  dataSource
    .initialize()
    .then(() => {
      racksMigration();
      setTimeout(() => {
        categoriesMigration();
      }, 3000);

      setTimeout(() => {
        raysMigration();
      }, 3000);

      setTimeout(() => {
        productsMigration();
      }, 4000);
      setTimeout(() => {
        console.log("I waited 3seconds");
      }, 3000);
      console.log(`The database is initializing on port: ${db_port}`);
      console.log(`The system is running on port: ${port}`);
    })
    .catch((error: any) => {
      console.error("Error by the initialization", error);
    });
});

app.get("/", (req: Request, res: Response) => {
  console.log("All is OKAY");
});

app.use("/", indexRouter);
