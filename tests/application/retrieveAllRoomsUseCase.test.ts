import { RoomRetrieverUseCase } from '../../src/application/use-cases/RetrieveAllRoomsUseCase';
import { RoomRepositoryStub } from '../../src/adapters/gateways/RoomRepositoryStub';
import { RoomPresenterStringImpl } from '../../src/adapters/presenters/RoomPresenterStringImpl';
import { RoomPresenterJsonImpl } from '../../src/adapters/presenters/RoomPresenterJsonImpl';

test('when the hotel has rooms, the manager can check the data of the rooms', () => {
  // GIVEN
  // 8 rooms are in the hotel
  const roomRepositoryStub = new RoomRepositoryStub();

  const roomRetriever = new RoomRetrieverUseCase(roomRepositoryStub);
  const presenter = new RoomPresenterStringImpl();

  // WHEN
  // the manager checks all rooms

  roomRetriever.execute(presenter);
  const roomsOutput = presenter.presenter();

  //THEN
  // the manager can read the rooms data
  console.table(roomsOutput);
  expect(roomsOutput.length).toEqual(8);
});

test('when the hotel has rooms, the manager can check the data of the rooms, the output format is a JSON', () => {
  // GIVEN
  // 8 rooms are in the hotel
  const roomRepositoryStub = new RoomRepositoryStub();

  const roomRetriever = new RoomRetrieverUseCase(roomRepositoryStub);
  const presenter = new RoomPresenterJsonImpl();

  // WHEN
  // the manager checks all rooms

  roomRetriever.execute(presenter);
  const roomsOutput = presenter.presenter();

  //THEN
  // the manager can read the rooms data

  console.log(roomsOutput);
  expect(roomsOutput).toBeDefined();
});
