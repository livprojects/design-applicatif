import { Room } from '../domain/Room';
export interface IRoomRepository {
  getAllRooms(): Room[];
  saveRooms(rooms: Room[]): void;
}
