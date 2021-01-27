import { storage } from '../lib/storage';
import { saveUsername, getUserName } from '../user';

jest.mock('../lib/storage.ts');

it('first example', () => {
  const myMock = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce('Hello world')
    .mockReturnValueOnce(5);

  const result1 = myMock();
  const result2 = myMock();
  const result3 = myMock();

  expect(myMock).toHaveBeenCalledTimes(3);

  expect(result1).toBe(true);
  expect(result2).toBe('Hello world');
  expect(result3).toBe(5);
});

it('second test', () => {
  const useranme = 'john doe';
  saveUsername(useranme);
  expect(storage.save);
  expect(storage.save).toHaveBeenCalledTimes(1);
  expect(storage.save).toHaveBeenCalledWith({
    key: 'username',
    value: useranme,
  });
});
it('third test', () => {
  const username = 'john doe';
  storage.get.mockReturnValueOnce(username);
  const result = getUserName();

  expect(result).toBe(username);
  expect(storage.get).toHaveBeenCalledTimes(1);
  expect(storage.get).toHaveBeenCalledWith({
    key: 'username',
  });
});

export {};
