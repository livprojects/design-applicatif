import { IHotelRepository } from '../../application/presenters/IHotelRepository';
import { Hotel } from '../../application/domain/Hotel';
import { Room } from '../../application/domain/Room';

export class HotelRepositoryStub implements IHotelRepository {
  private hotel!: Hotel;
  rooms = [
    new Room(1, 0, 101, 50),
    new Room(2, 0, 102, 100),
    new Room(3, 1, 103, 100),
    new Room(4, 1, 104, 100),
    new Room(5, 2, 201, 200),
    new Room(6, 2, 202, 200),
    new Room(7, 2, 203, 200),
    new Room(8, 3, 204, 250),
  ];

  saveHotel(hotel: Hotel): void {
    this.hotel = hotel;
  }

  getHotel(): Hotel {
    return this.hotel;
  }
}
