import { FixRoomPricesUseCase } from '../../src/application/use-cases/FixRoomPricesUseCase';
import { Hotel } from '../../src/application/domain/Hotel';
import { HotelRepositoryStub } from '../../src/adapters/gateways/HotelRepositoryStub';

test('when the manager fixes room prices, all rooms should have their prices updated according to floor rules', () => {
  // GIVEN
  // A hotel with rooms
  const hotelRepositoryStub = new HotelRepositoryStub();
  const hotel = new Hotel(hotelRepositoryStub.rooms);
  hotelRepositoryStub.saveHotel(hotel);

  const roomSetter = new FixRoomPricesUseCase(hotelRepositoryStub);

  // WHEN
  // the manager fixes room prices
  roomSetter.execute();

  // THEN
  // all rooms should have their prices updated according to floor rules
  const updatedHotel = hotelRepositoryStub.getHotel();
  const rooms = updatedHotel.rooms;

  // Ground floor rooms should have base price
  expect(rooms.find((room) => room.id === 1)?.price.value()).toEqual(100);

  // First floor rooms should have price * 1.07
  expect(rooms.find((room) => room.id === 3)?.price.value()).toEqual(107);
  expect(rooms.find((room) => room.id === 4)?.price.value()).toEqual(107);

  // Second floor rooms should have price * 1.22
  expect(rooms.find((room) => room.id === 5)?.price.value()).toEqual(122);
  expect(rooms.find((room) => room.id === 6)?.price.value()).toEqual(122);
  expect(rooms.find((room) => room.id === 7)?.price.value()).toEqual(122);

  // Third floor rooms should have price * 1.33, but capped at 200
  expect(rooms.find((room) => room.id === 8)?.price.value()).toEqual(133);
});
