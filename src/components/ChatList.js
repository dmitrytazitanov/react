import React from "react";
import { List, ListItem, Grid, Typography, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}





export const ChatList = ({ chats }) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h6" className={classes.title}>
        Список чатов
      </Typography>
      <div className={classes.demo}>
        <List dense={dense}>
          {generate(
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? 'Secondary text' : null}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>,
          )}
        </List>
      </div>
    </Grid>
      
  );
};