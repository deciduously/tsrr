import * as constants from '../constants'

export interface IncrementChutzpah {
  type: constants.INCREMENT_CHUTZPAH;
}

export interface DecrementChutzpah {
  type: constants.DECREMENT_CHUTZPAH;
}

export type ChutzpahAction = IncrementChutzpah | DecrementChutzpah;

export function incrementChutzpah(): IncrementChutzpah {
  return {
    type: constants.INCREMENT_CHUTZPAH
  }
}

export function decrementChutzpah(): DecrementChutzpah {
  return {
    type: constants.DECREMENT_CHUTZPAH
  }
}