import { container } from "tsyringe";

import { IUsersRepository } from "@users/repositories/IUsersRepository";
import { UsersRepository } from "@users/repositories/UsersRepository";

import { CreateUserController } from "@users/useCases/createUser/CreateUserController";
import { ListUsersController } from "@users/useCases/listUsers/ListUsersController";
import { CreateLoginController } from "@users/useCases/createLogin/CreateLoginController";
import { UpdateAvatarController } from "@users/useCases/updateAvatar/UpdateAvatarController";
import { ShowProfileController } from "@users/useCases/showProfile/ShowProfileController";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);

container.registerSingleton("CreateUserController", CreateUserController);
container.registerSingleton("ListUsersControllers", ListUsersController);
container.registerSingleton("CreateLoginController", CreateLoginController);
container.registerSingleton("UpdateAvatarController", UpdateAvatarController);
container.registerSingleton("ShowProfileController", ShowProfileController);
