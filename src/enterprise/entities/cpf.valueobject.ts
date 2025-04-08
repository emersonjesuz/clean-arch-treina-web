export class Cpf {
  private _value: string;
  constructor(value: string) {
    if (!value.match("^([0-9]{11})$")) {
      throw new Error("Invalid cpf");
    }
    this._value = value;
  }
  get value(): string {
    return this._value;
  }
}
