import { container } from "tsyringe";

import { IRolesRepository } from "@roles/repositories/IRolesRepository";

import { RolesRepository } from "@roles/repositories/RolesRepository";
import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController";
import { DeleteRoleController } from "@roles/useCases/deleteRole/DeleteRoleController";
import { ListRolesController } from "@roles/useCases/listRoles/ListRolesController";
import { FindRoleByIdController } from "@roles/useCases/findRoleById/FindRoleByIdController";
import { UpdateRoleController } from "@roles/useCases/updateRole/UpdateRoleController";

container.registerSingleton<IRolesRepository>(
  "RolesRepository",
  RolesRepository,
);
container.registerSingleton("CreateRoleController", CreateRoleController);
container.registerSingleton("ListRolesController", ListRolesController);
container.registerSingleton("FindRoleByIdController", FindRoleByIdController);
container.registerSingleton("UpdateRoleController", UpdateRoleController);
container.registerSingleton("DeleteRoleController", DeleteRoleController);
