import { Room } from '../domain/Room';
export interface RoomPresenter {
  execute(rooms: Room[]): void;
}
