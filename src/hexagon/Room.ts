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
}
