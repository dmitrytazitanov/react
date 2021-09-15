import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import './styles.css';


const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
    width: '45%',
    textAlign: 'center',
    paddingTop: '15px',
    marginTop: '10px',
    marginLeft: '45%',
    zIndex: 10,
  },
});
export const Message = ({ text, onClick, id }) => {
  const classes = useStyles();
  return <div className={classes.avatar}>{text}</div>;
};
