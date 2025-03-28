import { RoomRetrieverUseCase } from '../src/application/use-cases/RoomRetrieverUseCase';
import { RoomRepositoryStub } from '../src/server-side/RoomRepositoryStub';
import { RoomPresenterImpl } from '../src/application/presenters/RoomPresenterImpl';

test('when the hotel has 8 rooms, the manager can retrieve 8 rooms', () => {
  // GIVEN
  // 8 rooms are in the hotel
  const roomRepositoryStub = new RoomRepositoryStub();

  const roomRetriever = new RoomRetrieverUseCase(roomRepositoryStub);
  const presenter = new RoomPresenterImpl();

  // WHEN
  // the manager checks all rooms

  roomRetriever.execute(presenter);
  const roomsOutput = presenter.presenter();

  //THEN
  // 8 rooms are retrieved
  expect(roomsOutput.length).toEqual(8);
});
