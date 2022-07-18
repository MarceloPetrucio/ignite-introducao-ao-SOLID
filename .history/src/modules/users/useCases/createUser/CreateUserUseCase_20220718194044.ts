import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email);
    if (userExists) 
    
    return response.status(400).json({error: "Username already exists"});


    const user = this.usersRepository.create({
      name, email
    });

    return user;
  }
}

export { CreateUserUseCase };