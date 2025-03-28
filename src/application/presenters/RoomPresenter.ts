import { Room } from '../entities/Room';
export interface RoomPresenter {
  execute(rooms: Room[]): void;
}
