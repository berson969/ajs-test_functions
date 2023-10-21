import getHealthStatus from '../getHealthStatus'

test('healthy-test', () => {
  const character = { name: 'Маг', health: 90 }
  expect(getHealthStatus(character)).toBe('healthy')
})

test('wounded-test', () => {
  const character = { name: 'Маг', health: 45 }
  expect(getHealthStatus(character)).toBe('wounded')
})

test('critical-test', () => {
  const character = { name: 'Маг', health: 10 }
  expect(getHealthStatus(character)).toBe('critical')
})
