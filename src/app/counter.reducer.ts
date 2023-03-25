import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
// state will catch initialState's value
// export const str1 = 'asdasd';
// export const stringReducer = createReducer(
//   str1,
//   on(increment, (state) => state + ''),
//   on(decrement, (state) => state + ''),
//   on(reset, (state) => '0')
// );
// By chatGPT
// 'on' is used to define the reducer function's behavior for specific actions.

// By chatGPT
// initialState represents the initial value of the state property that the reducer will manage
