import { Room } from './Room';
import { Price } from './Price';

export class Hotel {
  imgUrl!: string;

  constructor(public readonly rooms: Room[]) {}

  // en charge de la cohérence de lui-même et de ses enfants => agrégat
  public setAllRoomsPrices(groundFloorPrice: number) {
    this.rooms.forEach((room) => {
      room.changePrice(groundFloorPrice);
      if (room.number === 3 && room.price.value() === 15) {
        const roomToUpdate = this.rooms.find((r) => r.number === 2);
        const newPrice = new Price(5);
        roomToUpdate!.price = newPrice;
      }
    });
  }
}
