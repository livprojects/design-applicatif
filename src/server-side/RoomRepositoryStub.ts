import { IRoomRepository } from '../application/IRoomRepository';
import { Room } from '../application/Room';
export class RoomRepositoryStub implements IRoomRepository {
  rooms = [
    new Room(1, 0, 101, 50),
    new Room(2, 0, 102, 100),
    new Room(3, 1, 103, 100),
    new Room(4, 1, 104, 100),
    new Room(5, 2, 201, 200),
    new Room(6, 2, 202, 200),
    new Room(7, 2, 203, 200),
    new Room(8, 3, 204, 250),
  ];

  getAllRooms(): Room[] {
    return this.rooms;
  }

  saveRooms(rooms: Room[]): void {
    this.rooms = rooms;
  }
}
