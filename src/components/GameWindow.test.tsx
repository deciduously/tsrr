// src/components/GameWindow.test.tsx

import GameWindow from './GameWindow';
import * as enzyme from 'enzyme';
import * as React from 'react';

it('renders the correct text when no chutzpah is given', () => {
    const gw = enzyme.shallow(<GameWindow name="Ol' Buddy Ol' Pal" />);
    expect(gw.find(".greeting").text()).toEqual('Heyyyyyy, Ol" Buddy Ol" Pal.  You"ve got 1 chutzpah.')
});

it('renders the correct text with an explicit chutzpah of 1', () => {
    const gw = enzyme.shallow(<GameWindow name="Ol' Buddy Ol' Pal" chutzpah={1} />);
    expect(gw.find(".greeting").text()).toEqual('Heyyyyyy, Ol" Buddy Ol" Pal.  You"ve got 1 chutzpah.')
});

it('renders the correct text with an explicit chutzpah of 5', () => {
    const gw = enzyme.shallow(<GameWindow name="Ol' Buddy Ol' Pal" chutzpah={5} />);
    expect(gw.find(".greeting").text()).toEqual('Heyyyyyy, Ol" Buddy Ol" Pal.  You"ve got 5 chutzpah.');
});

it('throws when the chutzpah is 0', () => {
    expect(() => {
        enzyme.shallow(<GameWindow name="Ol' Buddy Ol' Pal" chutzpah={0} />);
    }).toThrow();
});

it('throws when the chutzpah is negative', () => {
    expect(() => {
        enzyme.shallow(<GameWindow name="Ol' Buddy Ol' Pal" chutzpah={-1} />);
    }).toThrow();
});

it('triggers the onIncrement callback', () => {
    const onIncrement = jest.fn();
    const gw = enzyme.shallow(<GameWindow name="Ol' Buddy Ol' Pal" />);
    gw.find(".increment").simulate("click");
    expect(onIncrement).toHaveBeenCalled;
});

it('triggers the onDecrement callback', () => {
    const onDecrement = jest.fn();
    const gw = enzyme.shallow(<GameWindow name="Ol' Buddy Ol' Pal" />);
    gw.find(".decrement").simulate("click");
    expect(onDecrement).toHaveBeenCalled;
});