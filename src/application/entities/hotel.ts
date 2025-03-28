import { RoomPresenter } from '../presenters/RoomPresenter';
import { Room } from '../Room';

export class Hotel {
  constructor(public readonly rooms: Room[]) {}

  public setAllRoomsPrices(groundFloorPrice: number) {
    this.rooms.forEach((room) => {
      if (room.floor === 0) {
        room.price = groundFloorPrice;
      } else if (room.floor === 1) {
        room.price = groundFloorPrice * 1.07;
      } else if (room.floor === 2) {
        room.price = groundFloorPrice * 1.22;
      } else if (room.floor === 3) {
        room.price = groundFloorPrice * 1.33;
      }

      if (room.price > 200) {
        room.price = 200;
      }
    });
  }
}
