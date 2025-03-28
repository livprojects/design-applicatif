import { RoomPresenter } from '../../application/presenters/RoomPresenter';
import { Room } from '../../application/entities/Room';

export class RoomPresenterStringImpl implements RoomPresenter {
  rooms: string[] = [];

  execute(rooms: Room[]): void {
    rooms.map((room) => {
      return this.rooms.push(`Room ${room.number} - ${room.price}€`);
    });
  }

  presenter(): string[] {
    return this.rooms;
  }
}
