import { storage } from '../lib/storage';

export const saveUsername = (username) => {
  storage.save({ key: 'username', value: username });
};

export const getUserName = () => {
  storage.save({ key: 'username' });
};
