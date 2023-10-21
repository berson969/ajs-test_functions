import { expect, jest, test, beforeEach } from '@jest/globals'
import { fetchData } from '../http'
import { getLevel } from "../getLevel"

jest.mock('../http')

beforeEach(() => {
    jest.clearAllMocks()
})

test('correct-url-test', () => {
    fetchData.mockReturnValueOnce('{}')
    getLevel(500)
    expect(fetchData).toBeCalledWith("https://server/user/500")
})

test('get-ok-test', () => {
    fetchData.mockReturnValueOnce({ status: 'ok', level: '100' })
    const result = getLevel(1)
    expect(result).toBe('Ваш текущий уровень: 100')
})

test('false-status-test', () => {
    fetchData.mockReturnValueOnce({ status: 'false' })
    const result = getLevel(1)
    expect(result).toBe('Информация об уровне временно недоступна')
})

