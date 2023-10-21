import { expect, test } from '@jest/globals';
import { fetchData } from '../http';

test('http-exception-test', () => {
  expect(() => fetchData('test')).toThrow('Mock this!');
});
