import { Client } from "../../../enterprise/entities/client/client.entity";
import { CreateClientInputDto } from "../../presenters/client/create-client.presenters";

export class CreateClientMapper {
  public static toClient(createClientInputDto: CreateClientInputDto): Client {
    return new Client(
      createClientInputDto.first_name,
      createClientInputDto.last_name,
      createClientInputDto.email,
      createClientInputDto.cpf
    );
  }

  public static toCreateClientOutputDto(client: Client): CreateClientInputDto {
    return {
      first_name: client.firstName,
      last_name: client.lastName,
      email: client.email,
      cpf: client.cpf,
    };
  }
}
