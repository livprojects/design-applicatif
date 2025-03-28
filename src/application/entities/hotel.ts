import { Room } from './Room';

export class Hotel {
  constructor(public readonly rooms: Room[]) {}

  public setAllRoomsPrices(groundFloorPrice: number) {
    this.rooms.forEach((room) => {
      room.changePrice(groundFloorPrice);
    });
  }
}
