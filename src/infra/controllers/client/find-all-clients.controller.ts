import { FindAllClientsUseCase } from "../../../application/usecases/client/find-all-client.usecase";
import { FindAllClientsMapper } from "../../mappers/client/find-all-clients.mapper";
import { FindAllClientsOutputDto } from "../../presenters/client/find-all-clients.presenters";
import { HttpRequest, HttpResponse } from "../../web/http";
import { Controller } from "../controller";

export class FindAllClientsController
  implements Controller<any, FindAllClientsOutputDto[]>
{
  private _findAllClientsUseCase: FindAllClientsUseCase;

  constructor(findAllClientsUseCase: FindAllClientsUseCase) {
    this._findAllClientsUseCase = findAllClientsUseCase;
  }

  async execute(
    _: HttpRequest<any>
  ): Promise<HttpResponse<FindAllClientsOutputDto[]>> {
    const clients = await this._findAllClientsUseCase.execute();
    return {
      statusCode: 200,
      body: clients.map((client) =>
        FindAllClientsMapper.toFindAllClientsOutputDto(client)
      ),
    };
  }
}
