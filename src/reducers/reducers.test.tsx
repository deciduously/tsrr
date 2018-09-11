import { chutzpah } from '.';
import { decrementChutzpah, incrementChutzpah } from '../actions';

it('increments chutzpah', () => {
    const defaultState = { playerName: 'Sergio', chutzpah: 1 };
    const expectedState = { playerName: 'Sergio', chutzpah: 2 };
    expect(chutzpah(defaultState, incrementChutzpah())).toEqual(expectedState);
})

it('decrements postive chutzpah', () => {
    const defaultState = { playerName: 'Sergio', chutzpah: 2 };
    const expectedState = { playerName: 'Sergio', chutzpah: 1 };
    expect(chutzpah(defaultState, decrementChutzpah())).toEqual(expectedState);
})

it('does not decrement chutzpah below 1', () => {
    const defaultState = { playerName: 'Sergio', chutzpah: 1 };
    const expectedState = { playerName: 'Sergio', chutzpah: 1 };
    expect(chutzpah(defaultState, decrementChutzpah())).toEqual(expectedState);
})