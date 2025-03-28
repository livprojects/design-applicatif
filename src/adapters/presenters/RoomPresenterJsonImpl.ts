import { Room } from '../../application/domain/Room';
import { RoomPresenter } from '../../application/presenters/RoomPresenter';

export class RoomPresenterJsonImpl implements RoomPresenter {
  rooms: Room[] = [];

  execute(rooms: Room[]): void {
    this.rooms = rooms;
  }
  presenter(): string {
    return JSON.stringify(this.rooms);
  }
}
