import { inject, injectable } from "tsyringe";

import { Role } from "@roles/entities/Role";
import { AppError } from "@shared/errors/AppError";
import { IRolesRepository } from "@roles/repositories/IRolesRepository";

type FindRoleByIdParams = {
  id: string;
};

@injectable()
export class FindRoleByIdUseCase {
  constructor(
    @inject("RolesRepository")
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id }: FindRoleByIdParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id);

    if (!role) {
      throw new AppError("Role not found", 404);
    }

    return role;
  }
}
