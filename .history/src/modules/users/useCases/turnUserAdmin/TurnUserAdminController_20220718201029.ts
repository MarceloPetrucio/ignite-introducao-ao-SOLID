import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({});
      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({error});
    }
  }
}

export { TurnUserAdminController };
