import { Router } from "express";
import { container } from "tsyringe";
import { celebrate, Joi, Segments } from "celebrate";

import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController";
import { ListRolesController } from "@roles/useCases/listRoles/ListRolesController";
import { FindRoleByIdController } from "@roles/useCases/findRoleById/FindRoleByIdController";
import { UpdateRoleController } from "@roles/useCases/updateRole/UpdateRoleController";
import { DeleteRoleController } from "@roles/useCases/deleteRole/DeleteRoleController";

import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated";

const rolesRouter = Router();

const createRolesController = container.resolve(CreateRoleController);
const listRolesController = container.resolve(ListRolesController);
const findRoleByIdController = container.resolve(FindRoleByIdController);
const updateRolesController = container.resolve(UpdateRoleController);
const deleteRolesController = container.resolve(DeleteRoleController);

rolesRouter.use(isAuthenticated);

rolesRouter.get(
  "/",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request, response) => {
    return listRolesController.handle(request, response);
  },
);

rolesRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return findRoleByIdController.handle(request, response);
  },
);

rolesRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return createRolesController.handle(request, response);
  },
);

rolesRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return updateRolesController.handle(request, response);
  },
);

rolesRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return deleteRolesController.handle(request, response);
  },
);

export { rolesRouter };
