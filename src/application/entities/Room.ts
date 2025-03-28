export class Room {
  id!: number;
  floor!: number;
  number!: number;
  price!: number;
  constructor(id: number, floor: number, number: number, price: number) {
    this.id = id;
    this.floor = floor;
    this.number = number;
    this.price = price;
  }

  changePrice(price: number) {
    if (this.floor === 0) {
      this.price = price;
    } else if (this.floor === 1) {
      this.price = price * 1.07;
    } else if (this.floor === 2) {
      this.price = price * 1.22;
    } else if (this.floor === 3) {
      this.price = price * 1.33;
    }

    if (this.price > 200) {
      this.price = 200;
    }
  }
}
