import { Room } from './Room';

export class Hotel {
  constructor(public readonly rooms: Room[]) {}

  public setAllRoomsPrices(groundFloorPrice: number) {
    this.rooms.forEach((room) => {
      room.changePrice(groundFloorPrice);
      if (room.number === 3 && room.price === 15) {
        const roomToUpdate = this.rooms.find((r) => r.number === 2);
        roomToUpdate!.price = 5;
      }
    });
  }
}
