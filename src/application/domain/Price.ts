export class Price {
  constructor(private readonly price: number) {
    if (price > 200) {
      this.price = 200;
    } else {
      this.price = price;
    }
  }

  value(): number {
    return this.price;
  }
}
