export default class Currency {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
