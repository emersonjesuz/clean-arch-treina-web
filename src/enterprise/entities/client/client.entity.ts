import { Cpf } from "../cpf.valueobject";
import { Email } from "../email.valueobject ";
import { ClientName } from "./client-name.valueobject";

export class Client {
  private _firstName: ClientName;
  private _lastName: ClientName;
  private _email: Email;
  private _cpf: Cpf;

  constructor(firstName: string, lastName: string, email: string, cpf: string) {
    this._firstName = new ClientName(firstName);
    this._lastName = new ClientName(lastName);
    this._email = new Email(email);
    this._cpf = new Cpf(cpf);
  }

  get firstName(): string {
    return this._firstName.value;
  }

  get lastName(): string {
    return this._lastName.value;
  }

  get email(): string {
    return this._email.value;
  }

  get cpf(): string {
    return this._cpf.value;
  }
}
