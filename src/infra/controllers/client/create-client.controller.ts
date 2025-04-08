import { CreateClientUseCase } from "../../../application/usecases/client/create-client.usecase";
import { CreateClientMapper } from "../../mappers/client/create-client.mapper";
import {
  CreateClientInputDto,
  CreateClientOutputDto,
} from "../../presenters/client/create-client.presenters";
import { HttpRequest, HttpResponse } from "../../web/http";
import { Controller } from "../controller";

export class CreateClientController
  implements Controller<CreateClientInputDto, CreateClientOutputDto>
{
  private _createClientUseCase: CreateClientUseCase;
  constructor(createClientUseCase: CreateClientUseCase) {
    this._createClientUseCase = createClientUseCase;
  }

  async execute(
    request: HttpRequest<CreateClientInputDto>
  ): Promise<HttpResponse<CreateClientOutputDto>> {
    const clientToCreate = CreateClientMapper.toClient(request.body);
    const createdClient = await this._createClientUseCase.execute(
      clientToCreate
    );
    return {
      statusCode: 201,
      body: CreateClientMapper.toCreateClientOutputDto(createdClient),
    };
  }
}
