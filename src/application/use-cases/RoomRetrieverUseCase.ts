import { Room } from '../Room';
import { IRoomRepository } from '../IRoomRepository';
import { RoomPresenter } from '../presenters/RoomPresenter';

export class RoomRetrieverUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public execute(roomPresenter: RoomPresenter<string[]>) {
    const rooms = this.roomRepository.getAllRooms();
    roomPresenter.hydrateRooms(rooms);
  }
}
