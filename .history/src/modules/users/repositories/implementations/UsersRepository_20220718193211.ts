import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    let user = new User();

    Object.assign(user, {
      name,
      email,          
    });

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    return null;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    return null;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    return null;
  }

  list(): User[] {
    // Complete aqui
    return null;
  }
}

export { UsersRepository };
