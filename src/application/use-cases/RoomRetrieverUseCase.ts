import { IRoomRepository } from '../IRoomRepository';
import { RoomPresenter } from '../presenters/RoomPresenter';

export class RoomRetrieverUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public execute(roomPresenter: RoomPresenter) {
    const rooms = this.roomRepository.getAllRooms();
    roomPresenter.execute(rooms);
  }
}
