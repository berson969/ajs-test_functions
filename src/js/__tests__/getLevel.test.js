// import { expect, jest, test, beforeEach } from '@jest/globals';
import getLevel from '../getLevel';
import { fetchData } from '../http';

jest.mock('../http')

beforeEach(() => {
  jest.resetAllMocks();
});

test('correct-url-test', () => {
  fetchData.mockReturnValueOnce('{}')
  getLevel(500);
  expect(fetchData).toHaveBeenCalledWith('https://server/user/500');
});

test('get-ok-test', () => {
  fetchData.mockReturnValueOnce({ status: 'ok', level: '100' });
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 100');
});

test('false-status-test', () => {
  fetchData.mockReturnValueOnce({ status: 'false' });
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
