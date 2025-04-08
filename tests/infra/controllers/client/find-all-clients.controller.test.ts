import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-client.usecase";
import { FindAllClientsController } from "../../../../src/infra/controllers/client/find-all-clients.controller";
import { ClientInMemoryGateway } from "../../../../src/infra/gateways/client/client-inmemory.gateway";
import { FindAllClientsOutputDto } from "../../../../src/infra/presenters/client/find-all-clients.presenters";
import { HttpResponse } from "../../../../src/infra/web/http";

test("deve retorna uma resposta http com status code 200 e o body contendo a lista de clientes", async () => {
  const gateway = new ClientInMemoryGateway();
  const useCase = new FindAllClientsUseCase(gateway);
  const controller = new FindAllClientsController(useCase);

  const expectedResponse: HttpResponse<FindAllClientsOutputDto[]> = {
    statusCode: 200,
    body: [
      {
        first_name: "Joao",
        last_name: "Silva",
        email: "jaojao@email.com.br",
        cpf: "12345678911",
      },
    ],
  };

  const actualResponse = await controller.execute({ body: {} });
  expect(actualResponse).toEqual(expectedResponse);
});
