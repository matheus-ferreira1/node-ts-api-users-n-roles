import { Role } from "@roles/entities/Role";

type CreateRoleDTO = {
  name: string;
};

export class RolesRepository {
  private roles: Role[];
  private static INSTANCE: RolesRepository;

  private constructor() {
    this.roles = [];
  }

  // Design pattern Singleton: Acima estou criando uma instância da classe RolesRepository (uma instancia dela mesma) e armazenando na variável estática INSTANCE. Colocando o construtor como private, eu garanto que não será possível criar uma instância da classe fora dela mesma. Para criar uma instância, eu preciso chamar o método getInstance(), que verifica se já existe uma instância da classe. Se já existir, ele retorna a instância já criada. Se não existir, ele cria uma nova instância e retorna.

  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository();
    }
    return RolesRepository.INSTANCE;
  }

  create({ name }: CreateRoleDTO): Role {
    const role = new Role();

    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role);

    return role;
  }

  findAll(): Role[] {
    return this.roles;
  }

  findByName(name: string): Role | undefined {
    const role = this.roles.find(role => role.name === name);
    return role;
  }
}
