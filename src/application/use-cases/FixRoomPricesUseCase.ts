import { IHotelRepository } from '../presenters/IHotelRepository';

export class FixRoomPricesUseCase {
  constructor(private readonly hotelRepository: IHotelRepository) {}

  public execute() {
    const hotel = this.hotelRepository.getHotel();
    hotel.setAllRoomsPrices(100);
    this.hotelRepository.saveHotel(hotel);
  }
}
