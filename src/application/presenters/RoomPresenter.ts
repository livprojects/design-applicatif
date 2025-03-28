import { Room } from '../Room';
export interface RoomPresenter<T> {
  hydrateRooms(rooms: Room[]): void;
  presenter(): T;
}
