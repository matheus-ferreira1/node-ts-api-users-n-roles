import { Router } from "express";

import { createRolesController } from "@roles/useCases/createRole";
import { listRolesController } from "@roles/useCases/listRoles";
import { findRoleByIdController } from "@roles/useCases/findRoleById";

const rolesRouter = Router();

rolesRouter.get("/", (request, response) => {
  return listRolesController.handle(request, response);
});

rolesRouter.get("/:id", (request, response) => {
  return findRoleByIdController.handle(request, response);
});

rolesRouter.post("/", (request, response) => {
  return createRolesController.handle(request, response);
});

export { rolesRouter };
