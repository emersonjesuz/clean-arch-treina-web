import { Client } from "../../../enterprise/entities/client/client.entity";
import { ClientGateway } from "../../gateways/client/client.gateway";

export class CreateClientUseCase {
  private readonly _clientGateway: ClientGateway;

  constructor(clientGateway: ClientGateway) {
    this._clientGateway = clientGateway;
  }

  async execute(client: Client): Promise<Client> {
    await this._clientGateway.create(client);
    return client;
  }
}
