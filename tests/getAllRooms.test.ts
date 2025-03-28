import { RoomRetrieverUseCase } from '../src/application/use-cases/RoomRetrieverUseCase';
import { RoomRepositoryStub } from '../src/server-side/RoomRepositoryStub';
import { RoomPresenterStringImpl } from '../src/application/presenters/RoomPresenterStringImpl';

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
  console.log(roomsOutput);
  expect(roomsOutput.length).toEqual(8);
});
