import { RolesRepository } from "@roles/repositories/RolesRepository";
import { FindRoleByIdController } from "./FindRoleByIdController";
import { FindRoleByIdUseCase } from "./FindRoleByIdUseCase";

const rolesRepository = RolesRepository.getInstance();
const findRoleByIdUseCase = new FindRoleByIdUseCase(rolesRepository);
export const findRoleByIdController = new FindRoleByIdController(
  findRoleByIdUseCase,
);
