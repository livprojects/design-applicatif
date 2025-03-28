import { Room } from '../Room';
import { IRoomRepository } from '../IRoomRepository';

export class RoomRetrieverUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public execute(): Room[] {
    return this.roomRepository.getAllRooms();
  }
}
