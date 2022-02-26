import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { UserEnum } from "./userTypes";

export type UserType = {
  id: number;
  name: string;
  email?: string;
};

export type UserFetchActionType = {
  payload: "laoding" | string | UserType[];
  type: UserEnum;
};



export const loadUsers =
  () => async (dispatch: ThunkDispatch<{}, {}, UserFetchActionType>) => {
    dispatch({
      type: UserEnum.USER_FETCHING_LAODING,
      payload: "loading",
    });
    return axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: UserEnum.USER_FETCHING_SUCCESS,
          payload : response.data
        })
      })
      .catch((err: {message : string}) => {
        console.log(err);
        dispatch({
          type: UserEnum.USER_FETCHING_ERROR,
          payload : err.message
        })
      });
  };
