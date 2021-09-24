import { useSelector, useDispatch } from "react-redux";
import { toggleShowName } from "../../store/profile/actions";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { store } from "../../store";


const useStyles = makeStyles({
  check: {
    marginLeft: '25px',
  },
  piter: {
    textAlign: 'center',
    color: 'darkblue',
  },
});
export const Profile = () => {
  const showName = useSelector((state) => state.profile.showName);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClick = () => {
    dispatch(toggleShowName);
  };
  return (
    <>
      <h3>
        Profile
      </h3>
      <FormControlLabel
        control={<Checkbox className={classes.check} onChange={handleClick}  />}
      /> <br />
      {showName && <div className={classes.piter}>Hello, Piter</div>}
    </>
  );
};