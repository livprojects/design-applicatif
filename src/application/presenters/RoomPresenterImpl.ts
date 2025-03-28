import { RoomPresenter } from './RoomPresenter';
import { Room } from '../Room';
export class RoomPresenterImpl implements RoomPresenter<string[]> {
  private rooms: Room[] = [];

  hydrateRooms(rooms: Room[]): void {
    this.rooms = rooms;
  }

  presenter(): string[] {
    return this.rooms.map((room) => {
      return `Room ${room.number} - ${room.price}€`;
    });
  }
}
