import { createSelector } from '@ngrx/store';
import { UserState } from 'src/models/user.interface';


export const selectUsers = (state: UserState) => state.users

export const femaleUser =  createSelector(
  selectUsers,
  ((users)=> users.filter((user)=> user.gender === 'female'))
)
export const maleUser =  createSelector(
  selectUsers,
  ((users)=> users.filter((user)=> user.gender === 'male'))
)
