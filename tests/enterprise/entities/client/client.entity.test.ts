import { Client } from "../../../../src/enterprise/entities/client/client.entity";

test("deve retorna o nome como uma string", () => {
  const client = new Client(
    "Joao",
    "Silva",
    "jao@jao.com.br.br",
    "12345678911"
  );
  expect(client.firstName).toBe("Joao");
});
test("deve retorna o sobrenome como uma string", () => {
  const client = new Client("Joao", "Silva", "jao@jao.com.br", "12345678911");
  expect(client.lastName).toBe("Silva");
});
test("deve retorna o email como uma string", () => {
  const client = new Client("Joao", "Silva", "jao@jao.com.br", "12345678911");
  expect(client.email).toBe("jao@jao.com.br");
});
test("deve retorna o cpf como uma string", () => {
  const client = new Client("Joao", "Silva", "jao@jao.com.br", "12345678911");
  expect(client.cpf).toBe("12345678911");
});
test("deve lançar um erro quando nome com menos que tres caracteres", () => {
  const exec = () => new Client("J", "Silva", "jao@jao.com.br", "12345678911");
  expect(exec).toThrow(Error);
});
test("deve lançar um erro quando nome com caracteres inválidos", () => {
  const exec = () =>
    new Client("Joao1", "Silva", "jao@jao.com.br", "12345678911");
  expect(exec).toThrow(Error);
});
test("deve lançar um erro quando sobrenome com menos que tres caracteres", () => {
  const exec = () => new Client("Joao", "Si", "jao@jao.com.br", "12345678911");
  expect(exec).toThrow(Error);
});
test("deve lançar um erro quando sobrenome com caracteres inválidos", () => {
  const exec = () =>
    new Client("Joao", "Silva1", "jao@jao.com.br", "12345678911");
  expect(exec).toThrow(Error);
});
test("deve lançar um erro quando email sem @", () => {
  const exec = () =>
    new Client("Joao", "Silva", "jaojao.com.br", "12345678911");
  expect(exec).toThrow(Error);
});

test("deve lançar um erro quando o cpf tiver menos que onze caracteres", () => {
  const exec = () => new Client("Joao", "Silva", "jao@jao.com.br", "123456789");
  expect(exec).toThrow(Error);
});
