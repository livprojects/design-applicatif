import { Room } from '../entities/Room';
export interface IRoomRepository {
  getAllRooms(): Room[];
  saveRooms(rooms: Room[]): void;
}
