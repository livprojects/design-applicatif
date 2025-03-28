import { Hotel } from '../domain/Hotel';
export interface IHotelRepository {
  saveHotel(hotel: Hotel): void;
  getHotel(): Hotel;
}
