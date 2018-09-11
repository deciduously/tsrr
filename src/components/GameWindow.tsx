import './GameWindow.css';
import * as React from 'react';

export interface Props {
  name: string;
  chutzpah?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function GameWindow({ name, chutzpah = 1, onIncrement, onDecrement }: Props) {
  if (chutzpah <= 0) {
    throw new Error('pansy');
  }

  return (
    <div className="gameWindow">
      <div className="greeting">Heyyyyyy, {name}.  You've got {chutzpah} chutzpah.</div>
      <button className="increment" onClick={onIncrement}>+</button>
      <button className="decrement" onClick={onDecrement}>-</button>
    </div>
  );
}

export default GameWindow;
