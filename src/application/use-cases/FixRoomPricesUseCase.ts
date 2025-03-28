import { Hotel } from '../entities/hotel';
import { IRoomRepository } from '../presenters/IRoomRepository';

export class RoomSetterUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public execute() {
    const chambres = this.roomRepository.getAllRooms();
    const hotel = new Hotel(chambres);
    hotel.setAllRoomsPrices(100);
    this.roomRepository.saveRooms(hotel.rooms);
  }
}
