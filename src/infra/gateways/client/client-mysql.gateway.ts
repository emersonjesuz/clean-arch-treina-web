import { ClientGateway } from "../../../application/gateways/client/client.gateway";
import { Client } from "../../../enterprise/entities/client/client.entity";
import { connect } from "../../db/mysql.db";

export class ClientMySqlGateway implements ClientGateway {
  async create(client: Client): Promise<void> {
    const connection = await connect();
    await connection.query(
      "INSERT INTO clients (first_name, last_name, email, cpf) VALUES (?, ?, ?, ?)",
      [client.firstName, client.lastName, client.email, client.cpf]
    );
  }

  async findAll(): Promise<Client[]> {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM clients");
    const clients = JSON.parse(JSON.stringify(rows));
    return clients.map(
      (client: any) =>
        new Client(
          client.first_name,
          client.last_name,
          client.email,
          client.cpf
        )
    );
  }
}
