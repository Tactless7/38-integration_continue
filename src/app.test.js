import React from 'react';
 import ReactDOM from 'react-dom';

 import Game from './component/game';
 import Board from './component/board';
 import calculateWinner from './util/func'

 test('test calculateWinner', () => {
     let square = ["X", "X", "X", null, "O", "O", "O", null, null];
     expect(calculateWinner(square)).toBe("X");
 });

 it('test Game', () => {
     const div = document.createElement('game');
     ReactDOM.render(<Game />, div);
 });

 it('test Board', () => {
     let square = ["X", "X", "X", null, "O", "O", "O", null, null];
     const div = document.createElement('board');
     ReactDOM.render(<Board squares={square} />, div);
 });
