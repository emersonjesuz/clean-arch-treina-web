import { ClientGateway } from "../../../application/gateways/client/client.gateway";
import { Client } from "../../../enterprise/entities/client/client.entity";

export class ClientInMemoryGateway implements ClientGateway {
  private static clients: Client[] = [
    new Client("Joao", "Silva", "jaojao@email.com.br", "12345678911"),
  ];
  async findAll(): Promise<Client[]> {
    const clonedClients: Client[] = [];
    ClientInMemoryGateway.clients.forEach((client) =>
      clonedClients.push(
        new Client(client.firstName, client.lastName, client.email, client.cpf)
      )
    );
    return clonedClients;
  }
  async create(client: Client): Promise<void> {
    ClientInMemoryGateway.clients.push(
      new Client(client.firstName, client.lastName, client.email, client.cpf)
    );
    return Promise.resolve();
  }
}
