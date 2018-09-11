import GameWindow from '../components/GameWindow';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

export function mapStateToProps({ chutzpah, playerName }: StoreState) {
  return {
    chutzpah,
    name: playerName,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ChutzpahAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementChutzpah()),
    onDecrement: () => dispatch(actions.decrementChutzpah()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameWindow);