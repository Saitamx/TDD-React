import { storage } from '../lib/storage';
import { saveUsername } from '../user';

jest.mock('../lib/storage.ts');

it('first example', () => {
  const myMock = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce('hello world')
    .mockReturnValueOnce(5);

  const result1 = myMock();
  const result2 = myMock();
  const result3 = myMock();

  expect(myMock).toHaveBeenCalledTimes(3);

  expect(result1).toBe(true);
  expect(result2).toBe('Hello');
  expect(result3).toBe(5);
});

it('second test', () => {
  console.log('storage', storage);
  saveUsername('john doe');
  expect(storage.save);
  expect(storage.save).toHaveBeenCalled;
});

export {};
