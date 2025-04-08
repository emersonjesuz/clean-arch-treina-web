import { Client } from "../../../enterprise/entities/client/client.entity";
import { ClientGateway } from "../../gateways/client/client.gateway";

export class FindAllClientsUseCase {
  private readonly _clientGateway: ClientGateway;

  constructor(clientGateway: ClientGateway) {
    this._clientGateway = clientGateway;
  }
  async execute(): Promise<Client[]> {
    return this._clientGateway.findAll();
  }
}
