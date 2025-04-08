export class ClientName {
  private _value: string;
  constructor(value: string) {
    if (value.length < 3) {
      throw new Error("Invalid  name");
    }

    if (!value.match("^([a-zA-Z]+)$")) {
      throw new Error("Invalid  name");
    }
    this._value = value;
  }
  get value(): string {
    return this._value;
  }
}
