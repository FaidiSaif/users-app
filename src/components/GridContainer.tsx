import React from "react";
import Grid from "@mui/material/Grid";
import UserCard from "./UserCard";
import { RenderUserType } from "./User";


function FormRow(users: RenderUserType[]): React.ReactNode {
  return (
    <Grid container item spacing={3}>
      {users.map((user: RenderUserType) => {
        return (
          <Grid item xs={3}>
            <UserCard {...user} />
          </Grid>
        );
      })}
    </Grid>
  );
}



export const GridContainer = (props : { users : RenderUserType[] }) => {

  const renderUsers = (users: RenderUserType[]) => {
    let arrBlocks = [];
    let blocks = ~~(users.length / 4);
    for (let i = 0; i < blocks; i++) {
      arrBlocks.push(FormRow(users.slice(i, i + 4)));
    }
    arrBlocks.push(FormRow(users.slice(blocks * 4, users.length)));
    return arrBlocks;
  };

  return (
    <Grid container item spacing={3}>
      {renderUsers(props.users)}
    </Grid>
  );
};
