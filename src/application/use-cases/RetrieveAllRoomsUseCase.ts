import { IRoomRepository } from '../presenters/IRoomRepository';
import { RoomPresenter } from '../presenters/RoomPresenter';

export class RetrieveAllRoomsUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public execute(roomPresenter: RoomPresenter) {
    const rooms = this.roomRepository.getAllRooms();
    roomPresenter.execute(rooms);
  }
}
