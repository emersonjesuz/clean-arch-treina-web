import { Cpf } from "../../../src/enterprise/entities/cpf.valueobject";

test("deve lançar um error quando tiver menos que onze caracteres", () => {
  const exec = () => new Cpf("123456789");
  expect(exec).toThrow(Error);
});
test("deve lançar um error quando tiver mais que onze caracteres", () => {
  const exec = () => new Cpf("1234567891112");
  expect(exec).toThrow(Error);
});
test("deve lançar um error quando tiver caracteres inválidos", () => {
  const exec = () => new Cpf("1234567891@");
  expect(exec).toThrow(Error);
});
test("deve retorna o cpf como uma string", () => {
  const cpf = new Cpf("12345678911");
  expect(cpf.value).toBe("12345678911");
});
