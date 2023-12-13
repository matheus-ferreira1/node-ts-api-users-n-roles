import { DataSource } from "typeorm";

import { CreateRolesTable1702425584960 } from "./migrations/1702425584960-CreateRolesTable";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [],
  migrations: [CreateRolesTable1702425584960],
});
