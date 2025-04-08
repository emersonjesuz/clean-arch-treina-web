export class Email {
  private _value: string;
  constructor(value: string) {
    if (!value.match("([a-zA-Z0-9_.+-]+@[a-zA-Z0-9_+-]+\\.[a-zA-Z]+)")) {
      throw new Error("Invalid email");
    }
    this._value = value;
  }
  get value(): string {
    return this._value;
  }
}
