import { DataSource } from "typeorm";

import { Role } from "@roles/entities/Role";
import { User } from "@users/entities/User";

import { CreateRolesTable1702425584960 } from "./migrations/1702425584960-CreateRolesTable";
import { CreateUsersTable1703125165250 } from "./migrations/1703125165250-CreateUsersTable";
import { AddRoleIdToUsersTable1703125554269 } from "./migrations/1703125554269-AddRoleIdToUsersTable";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role, User],
  migrations: [
    CreateRolesTable1702425584960,
    CreateUsersTable1703125165250,
    AddRoleIdToUsersTable1703125554269,
  ],
});
