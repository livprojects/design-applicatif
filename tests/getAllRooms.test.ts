import { RoomRetrieverUseCase } from '../src/application/use-cases/RoomRetrieverUseCase';
import { RoomRepositoryStub } from '../src/server-side/RoomRepositoryStub';
import { RoomPresenterImpl } from '../src/application/presenters/RoomPresenterImpl';
test('récupérer les chambres au bon format', () => {
  // GIVEN
  const roomRepositoryStub = new RoomRepositoryStub();

  const roomRetriever = new RoomRetrieverUseCase(roomRepositoryStub);
  const rooms = roomRetriever.execute();
  const presenter = new RoomPresenterImpl();
  presenter.hydrateRooms(rooms);
  const roomsOutput = presenter.presenter();

  // my hotel has 8 rooms
  // const roomRepositoryStub = new RoomRepositoryStub();
  // const rooms = roomRepositoryStub.getAllRooms();
  // const hotel = new Hotel(roomRepositoryStub);
  // // WHEN
  // // get All rooms
  // const roomsRetrieved = hotel.getAllRooms();
  // // THEN
  // // empty list
  // expect(roomsRetrieved).toEqual(rooms);
});
