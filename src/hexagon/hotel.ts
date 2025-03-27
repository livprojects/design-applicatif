import { IRoomRepository } from './IRoomRepository';
import { Room } from './Room';

export class Hotel {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public getAllRooms(): Room[] {
    return this.roomRepository.getAllRooms();
  }

  public setAllRoomsPrices(groundFloorPrice: number) {
    const rooms = this.getAllRooms();
    rooms.forEach((room) => {
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

      this.roomRepository.saveRooms(rooms);
    });
  }
}
