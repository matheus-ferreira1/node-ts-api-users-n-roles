import { container } from "tsyringe";

import { IUsersRepository } from "@users/repositories/IUsersRepository";
import { UsersRepository } from "@users/repositories/UsersRepository";
import { RefreshTokenRepository } from "@users/repositories/RefreshTokenRepository";
import { IRefreshTokenRepository } from "@users/repositories/IRefreshTokenRepository";

import { CreateUserController } from "@users/useCases/createUser/CreateUserController";
import { ListUsersController } from "@users/useCases/listUsers/ListUsersController";
import { CreateLoginController } from "@users/useCases/createLogin/CreateLoginController";
import { UpdateAvatarController } from "@users/useCases/updateAvatar/UpdateAvatarController";
import { ShowProfileController } from "@users/useCases/showProfile/ShowProfileController";
import { UpdateProfileController } from "@users/useCases/updateProfile/UpdateProfileController";
import { CreateAccessAndRefreshTokenController } from "@users/useCases/createAccessAndRefreshToken/CreateAccessAndRefreshTokenController";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);
container.registerSingleton<IRefreshTokenRepository>(
  "RefreshTokenRepository",
  RefreshTokenRepository,
);

container.registerSingleton("CreateUserController", CreateUserController);
container.registerSingleton("ListUsersControllers", ListUsersController);
container.registerSingleton("CreateLoginController", CreateLoginController);
container.registerSingleton("UpdateAvatarController", UpdateAvatarController);
container.registerSingleton("ShowProfileController", ShowProfileController);
container.registerSingleton("UpdateProfileController", UpdateProfileController);
container.registerSingleton(
  "CreateAccessAndRefreshTokenController",
  CreateAccessAndRefreshTokenController,
);
