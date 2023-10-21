import {expect, test} from '@jest/globals'
import sortMatchers from "../sortMatchers";

test('sort-test', () => {
    const characters = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]
    expect(sortMatchers(characters)).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]
    )
})