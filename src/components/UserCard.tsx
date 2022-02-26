import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { RenderUserType } from "./User";

type UserCardProps = RenderUserType; 

const imagesPath = process.env.PUBLIC_URL + "/assets/icons";

export default function UserCard({title, subheader, photo}: UserCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            alt={title}
            src={photo}
          />
        }
        title={title}
        subheader={subheader}
        action={
          <IconButton aria-label="add to favorites" size="small">
            <FavoriteIcon />
          </IconButton>
        }
      />
      <CardActions disableSpacing>
        <Button
          variant="outlined"
          fullWidth={true}
          size="small"
          color="secondary"
        >
          visit full profile
        </Button>
      </CardActions>
    </Card>
  );
}
