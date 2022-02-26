import { UserFetchActionType } from './userAction' ;

export enum UserEnum  {
  USER_FETCHING_ERROR,
  USER_FETCHING_SUCCESS,
  USER_FETCHING_LAODING  
}

export type UserActionType = UserFetchActionType  ; 