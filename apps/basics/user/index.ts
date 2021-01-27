import { __values } from 'tslib';
import { storage } from '../lib/storage';

export const saveUsername = (username) => {
  storage.save({ key: 'username', value: username });
};

export const getUserName = () => {
  return storage.get({ key: 'username' });
};
