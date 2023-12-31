export class OddValuesCounter {
  oddValues = 0;
  count(value: number) {
    if (value % 2 !== 0) {
      this.oddValues++;
    }
    return this.oddValues;
  }
  reset() {
    this.oddValues = 0;
  }
  get() {
    return this.oddValues;
  }
}
