import dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config;

const host: string = String(process.env.HOST) || "";
const port: number = Number(process.env.PORT) || 5432;
const db_username: string = String(process.env.DB_USERNAME) || "";
const db_password: string = String(process.env.DB_PASSWORD) || "";
const db_name: string = String(process.env.DB_NAME) || "";

export const dataSource: DataSource = new DataSource({
  type: "postgres",
  host: host,
  port: port,
  username: db_username,
  password: db_password,
  database: db_name,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
