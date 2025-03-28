import { IRoomRepository } from '../../application/presenters/IRoomRepository';
import { Room } from '../../application/domain/Room';
import { Price } from '../../application/domain/Price';
export class RoomRepositoryStub implements IRoomRepository {
  rooms = [
    new Room(1, 0, 101, new Price(50)),
    new Room(2, 0, 102, new Price(100)),
    new Room(3, 1, 103, new Price(100)),
    new Room(4, 1, 104, new Price(100)),
    new Room(5, 2, 201, new Price(200)),
    new Room(6, 2, 202, new Price(200)),
    new Room(7, 2, 203, new Price(200)),
    new Room(8, 3, 204, new Price(250)),
  ];

  getAllRooms(): Room[] {
    return this.rooms;
  }

  saveRooms(rooms: Room[]): void {
    this.rooms = rooms;
  }
}
