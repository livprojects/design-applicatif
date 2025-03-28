import { Hotel } from '../src/application/entities/hotel';

// test('when  my hotel has no room, get all rooms should return an empy list', () => {
//  // GIVEN
//     // my hotel has no room
//     const hotel = new Hotel([]);
//  // WHEN
//     // get All rooms
//     const rooms = hotel.getAllRooms();
//  // THEN
//     // empty list
//     expect(rooms).toEqual([]);
// });
import { RoomRepositoryStub } from '../src/server-side/RoomRepositoryStub';
test('when my hotel has 8 rooms, retrieving all rooms should return my rooms with their floor, number and price', () => {
  // GIVEN
  // my hotel has 8 rooms
  const roomRepositoryStub = new RoomRepositoryStub();
  const rooms = roomRepositoryStub.getAllRooms();
  const hotel = new Hotel(roomRepositoryStub);
  // WHEN
  // get All rooms
  const roomsRetrieved = hotel.getAllRooms();
  // THEN
  // empty list
  expect(roomsRetrieved).toEqual(rooms);
});

test('when the manager sets a base rate of 100€, the rate of a ground floor room is 100€', () => {
  // GIVEN
  // the base rate is 100€
  const groundFloorRoomPriceToSet = 100;
  const roomRepositoryStub = new RoomRepositoryStub();
  // there are several rooms and several floors
  const hotel = new Hotel(roomRepositoryStub);

  // WHEN
  // the manager updates the prices of the rooms and sets the price of the ground floor to 100€
  hotel.setAllRoomsPrices(groundFloorRoomPriceToSet);
  // THEN
  // the price of the ground floor rooms is 100€
  const updatedRooms = roomRepositoryStub.getAllRooms();
  expect(updatedRooms[0].price).toEqual(groundFloorRoomPriceToSet);
});

test('when the manager sets a base rate of 100€, the rate of a first floor room is 107€', () => {
  // GIVEN
  // the base rate is 100€
  const groundFloorRoomPriceToSet = 100;
  const roomRepositoryStub = new RoomRepositoryStub();
  // there are several rooms and several floors
  const hotel = new Hotel(roomRepositoryStub);

  // WHEN
  // the manager updates the prices of the rooms and sets the price of the ground floor to 100€
  hotel.setAllRoomsPrices(groundFloorRoomPriceToSet);
  // THEN
  // the price of the first floor rooms is 107€
  const updatedRooms = roomRepositoryStub.getAllRooms();
  expect(updatedRooms[2].price).toEqual(groundFloorRoomPriceToSet * 1.07);
});

test('when the manager sets a base rate of 100€, the rate of a second floor room is 122€', () => {
  // GIVEN
  // the base rate is 100€
  const groundFloorRoomPriceToSet = 100;
  const roomRepositoryStub = new RoomRepositoryStub();
  // there are several rooms and several floors
  const hotel = new Hotel(roomRepositoryStub);

  // WHEN
  // the manager updates the prices of the rooms and sets the price of the ground floor to 100€
  hotel.setAllRoomsPrices(groundFloorRoomPriceToSet);
  // THEN
  // the price of the second floor rooms is 122€
  const updatedRooms = roomRepositoryStub.getAllRooms();
  expect(updatedRooms[4].price).toEqual(groundFloorRoomPriceToSet * 1.22);
});

test('when the manager sets a base rate of 100€, the rate of a second floor room is 133€', () => {
  // GIVEN
  // the base rate is 100€
  const groundFloorRoomPriceToSet = 100;
  const roomRepositoryStub = new RoomRepositoryStub();
  // there are several rooms and several floors
  const hotel = new Hotel(roomRepositoryStub);

  // WHEN
  // the manager updates the prices of the rooms and sets the price of the ground floor to 100€
  hotel.setAllRoomsPrices(groundFloorRoomPriceToSet);
  // THEN
  // the price of the second floor rooms is 133€
  const updatedRooms = roomRepositoryStub.getAllRooms();
  expect(updatedRooms[7].price).toEqual(groundFloorRoomPriceToSet * 1.33);
});

test('when the manager sets a base rate of 100€, the maximum rate is 200', () => {
  // GIVEN
  // the base rate is 100€
  const groundFloorRoomPriceToSet = 100;

  const roomRepositoryStub = new RoomRepositoryStub();
  // there are several rooms and several floors
  const hotel = new Hotel(roomRepositoryStub);

  // WHEN
  // the manager updates the prices of the rooms and sets the price of the ground floor to 100€
  hotel.setAllRoomsPrices(groundFloorRoomPriceToSet);
  // THEN
  // the updated price can't be greater than 200
  const updatedRooms = roomRepositoryStub.getAllRooms();
  expect(updatedRooms[7].price).toBeLessThanOrEqual(200);
});
