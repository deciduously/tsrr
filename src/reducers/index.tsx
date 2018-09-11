// src/reducers/index.tsx

import { ChutzpahAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_CHUTZPAH, DECREMENT_CHUTZPAH } from '../constants/index';

export function chutzpah(state: StoreState, action: ChutzpahAction): StoreState {
  switch (action.type) {
    case INCREMENT_CHUTZPAH:
      return { ...state, chutzpah: state.chutzpah + 1 };
    case DECREMENT_CHUTZPAH:
      return { ...state, chutzpah: Math.max(1, state.chutzpah - 1) };
  }
  return state;
}