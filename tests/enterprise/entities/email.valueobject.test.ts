import { Email } from "../../../src/enterprise/entities/email.valueobject ";

test("deve lançar um error quando não tiver @ no email", () => {
  const exec = () => new Email("joãojaoemail.com");
  expect(exec).toThrow(Error);
});
test("deve lançar um error quando não tiver um ponto no email", () => {
  const exec = () => new Email("joãojao@emailcom");
  expect(exec).toThrow(Error);
});
test("deve retorna o email como uma string", () => {
  const email = new Email("joãojao@email.com");
  expect(email.value).toBe("joãojao@email.com");
});
