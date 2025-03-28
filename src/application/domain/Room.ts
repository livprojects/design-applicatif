import { Price } from './Price';
export class Room {
  id!: number;
  floor!: number;
  number!: number;
  price!: Price;
  constructor(id: number, floor: number, number: number, price: Price) {
    this.id = id;
    this.floor = floor;
    this.number = number;
    this.price = price;
  }

  changePrice(price: number) {
    if (this.floor === 0) {
      this.price = new Price(price);
    } else if (this.floor === 1) {
      this.price = new Price(price * 1.07);
    } else if (this.floor === 2) {
      this.price = new Price(price * 1.22);
    } else if (this.floor === 3) {
      this.price = new Price(price * 1.33);
    }
  }
}
