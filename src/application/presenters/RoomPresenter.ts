import { Room } from '../Room';
export interface RoomPresenter {
  execute(rooms: Room[]): void;
}
