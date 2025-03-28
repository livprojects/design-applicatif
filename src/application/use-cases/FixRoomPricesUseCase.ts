import { IRoomRepository } from '../presenters/IRoomRepository';
import { Hotel } from '../entities/Hotel';

export class RoomSetterUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public execute() {
    const chambres = this.roomRepository.getAllRooms();
    const hotel = new Hotel(chambres);
    hotel.setAllRoomsPrices(100);
    this.roomRepository.saveRooms(hotel.rooms);
  }
}
