import { IHotelRepository } from '../../application/presenters/IHotelRepository';
import { Hotel } from '../../application/domain/Hotel';
import { Room } from '../../application/domain/Room';
import { Price } from '../../application/domain/Price';

export class HotelRepositoryStub implements IHotelRepository {
  private hotel!: Hotel;
  rooms = [
    new Room(1, 0, 101, new Price(50)),
    new Room(2, 0, 102, new Price(100)),
    new Room(3, 1, 103, new Price(100)),
    new Room(4, 1, 104, new Price(100)),
    new Room(5, 2, 201, new Price(200)),
    new Room(6, 2, 202, new Price(200)),
    new Room(7, 2, 203, new Price(200)),
    new Room(8, 3, 204, new Price(250)),
  ];

  saveHotel(hotel: Hotel): void {
    this.hotel = hotel;
  }

  getHotel(): Hotel {
    return this.hotel;
  }
}
