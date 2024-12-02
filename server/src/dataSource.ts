import { DataSource } from "typeorm";
import { User } from "./entity/User";
import dotenv from "dotenv";
import { Product } from "./entity/Product";
import { ProductCategory } from "./entity/ProductCategory";
import { Rack } from "./entity/Rack";
import { Ray } from "./entity/Ray";
import { Sesson } from "./entity/Session";

dotenv.config();

const db_host: string = String(process.env.DB_HOST) || "";
const db_port: number = Number(process.env.DB_PORT) || 5432;
const db_username: string = String(process.env.DB_USERNAME) || "";
const db_password: string = String(process.env.DB_PASSWORD) || "";
const db_name: string = String(process.env.DB_NAME) || "";

export const dataSource: DataSource = new DataSource({
  type: "postgres",
  host: db_host,
  port: db_port,
  username: db_username,
  password: db_password,
  database: db_name,
  synchronize: true,
  logging: true,
  entities: [User, Product, ProductCategory, Rack, Ray, Sesson],
  subscribers: [],
  migrations: [],
});
