import { Room } from './Room';
export interface IRoomRepository {
  getAllRooms(): Room[];
  saveRooms(rooms: Room[]): void;
}
