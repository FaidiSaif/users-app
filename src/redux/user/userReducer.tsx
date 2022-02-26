import { UserType } from "./userAction"
import { UserActionType , UserEnum } from "./userTypes";

export type UserStateType = {
  loading : '' | 'loading', 
  error : string , 
  users : UserType[]
}; 

const usersInitialState : UserStateType = {
  loading : 'loading', 
  error : '', 
  users : []
}

export const userReducer = (prevState: UserStateType = usersInitialState, action: UserActionType) => {
  switch(action.type) {
    case UserEnum.USER_FETCHING_LAODING:  
      return {...prevState}
    case UserEnum.USER_FETCHING_SUCCESS :
      let _users = (action.payload as UserType[]).map((_user : UserType) => ({name:_user.name, id: _user.id, email:_user.email}))
      return {
        ...prevState , loading:'', error:'', users: _users
      }
    case UserEnum.USER_FETCHING_ERROR :
      return {
        ...prevState, error: ''
      }
    default:  
      return prevState;
  }
} 

