import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-client.usecase";
import { Client } from "../../../../src/enterprise/entities/client/client.entity";
import { ClientInMemoryGateway } from "../../../../src/infra/gateways/client/client-inmemory.gateway";

test("deve retorna a lista de clientes", async () => {
  const clienteGateway = new ClientInMemoryGateway();
  const findAllClientsUseCase = new FindAllClientsUseCase(clienteGateway);

  const expectedClients = [
    new Client("Joao", "Silva", "jaojao@email.com.br", "12345678911"),
  ];
  const actualClients = await findAllClientsUseCase.execute();

  expect(actualClients).toEqual(expectedClients);
});
