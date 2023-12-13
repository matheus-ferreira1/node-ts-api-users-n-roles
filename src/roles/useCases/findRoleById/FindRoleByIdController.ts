import { Request, Response } from "express";

import { FindRoleByIdUseCase } from "./FindRoleByIdUseCase";

export class FindRoleByIdController {
  constructor(private findRoleByIdUseCase: FindRoleByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const role = await this.findRoleByIdUseCase.execute({ id });

    return response.status(200).json(role);
  }
}
