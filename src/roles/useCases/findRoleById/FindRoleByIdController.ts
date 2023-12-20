import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindRoleByIdUseCase } from "./FindRoleByIdUseCase";

export class FindRoleByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findRoleByIdUseCase = container.resolve(FindRoleByIdUseCase);

    const { id } = request.params;
    const role = await findRoleByIdUseCase.execute({ id });

    return response.status(200).json(role);
  }
}
