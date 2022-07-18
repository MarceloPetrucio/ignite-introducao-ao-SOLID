import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const {id} = request.body;

    try {
      
    } catch (error) {
      
    }
    const users = this.listAllUsersUseCase.execute(id);
    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
