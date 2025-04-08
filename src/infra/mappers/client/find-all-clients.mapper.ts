import { Client } from "../../../enterprise/entities/client/client.entity";
import { FindAllClientsOutputDto } from "../../presenters/client/find-all-clients.presenters";

export class FindAllClientsMapper {
  public static toFindAllClientsOutputDto(
    client: Client
  ): FindAllClientsOutputDto {
    return {
      first_name: client.firstName,
      last_name: client.lastName,
      email: client.email,
      cpf: client.cpf,
    };
  }
}
