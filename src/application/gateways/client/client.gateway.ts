import { Client } from "../../../enterprise/entities/client/client.entity";

export interface ClientGateway {
  findAll(): Promise<Client[]>;
  create(client: Client): Promise<void>;
}
