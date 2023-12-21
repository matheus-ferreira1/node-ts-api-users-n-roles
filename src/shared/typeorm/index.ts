import { DataSource } from "typeorm";

import { CreateRolesTable1702425584960 } from "./migrations/1702425584960-CreateRolesTable";

import { Role } from "@roles/entities/Role";
import { CreateUsersTable1703125165250 } from "./migrations/1703125165250-CreateUsersTable";
import { AddRoleIdToUsersTable1703125554269 } from "./migrations/1703125554269-AddRoleIdToUsersTable";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role],
  migrations: [
    CreateRolesTable1702425584960,
    CreateUsersTable1703125165250,
    AddRoleIdToUsersTable1703125554269,
  ],
});
