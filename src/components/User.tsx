
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { useEffect } from "react";
import {StateType} from '../redux/rootReducer' ;
import { UserStateType } from "../redux/user";
import { loadUsers, UserType } from "../redux/user/userAction";
import { UserActionType } from "../redux/user/userTypes";
import { GridContainer } from "./GridContainer";

type UserProps = {
  users : UserStateType,
  loadUsers : () => ReturnType<ThunkDispatch<{},{}, UserActionType>>
}

export type RenderUserType = {
  title: string;
  subheader: string;
  photo: string;
}


const imagesPath = process.env.PUBLIC_URL + "/assets/icons";
const usersImages = [
  "aleksandr-minakov-xDyqR14KyAs-unsplash.jpg",
  "art-hauntington-jzY0KRJopEI-unsplash.jpg",  
  "austin-wade-X6Uj51n5CE8-unsplash.jpg",      
  "behrouz-sasani-fWGd3NLyfJ0-unsplash.jpg",   
  "craig-mckay-jmURdhtm7Ng-unsplash.jpg",      
  "ehsan-ahmadi-vsWy6nchcOs-unsplash.jpg",     
  "joel-mott-LaK153ghdig-unsplash.jpg",        
  "radu-florin-JyVcAIUAcPM-unsplash.jpg",      
  "stefan-stefancik-QXevDflbl8A-unsplash.jpg", 
  "timothy-barlin-2BJwlRZaR5M-unsplash.jpg"   
]

const getImage = (index:number):string => {
  if (index < usersImages.length)
    return `${imagesPath}/${usersImages[index]}`;
  return `${imagesPath}/aleksandr-minakov-xDyqR14KyAs-unsplash.jpg`;
}

export const _User = ({users , loadUsers} : UserProps) => {

  useEffect(() => {
    loadUsers(); 
  }, [])

  if (users.error) { return <h1>Error Occured while loading</h1>}
  if(users.loading==="loading") {return <h1>Loading...</h1>}
  let _users = users.users.map( ( user : UserType , index:number ) => (
    { title : user.name, subheader : user.email as string , photo : getImage(index)}
  ))
  return (
      <GridContainer users={_users} />
  )
}


const mapDispatchToProps = (dispatch : ThunkDispatch<{},{}, UserActionType>) => ({
  loadUsers : () => dispatch(loadUsers())
})

const mapStateToProps = (state : StateType) => {
  return {users  : state.users}
}

export const User =  connect(mapStateToProps, mapDispatchToProps)(_User)