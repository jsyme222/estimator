import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  makeStyles,
  IconButton,
  Grow
} from "@material-ui/core";
import { HelpOutlineRounded } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  rootRadio: {},
  labelRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function ProjectType(props) {
  const dispatch = useDispatch();
  const [radioState, setRadioState] = useState("advertise");
  const [hasChanged, setHasChanged] = useState(1000); // Value to be tracked as input is selected
  const [error, setError] = useState(null);
  const helpText = require("./project-type-help-text.json");

  const classes = useStyles();

  const exchange = (v) => {
    dispatch({ type: "SUBTRACT_TOTAL", value: hasChanged });
    dispatch({ type: "ADD_TOTAL", value: v });
    setHasChanged(v);
    setError(null);
  };

  const setCost = (e) => {
    setRadioState(e.target.value);
    switch (e.target.value) {
      case "advertise":
        exchange(1000);
        break;
      case "blog":
        exchange(2000);
        break;
      case "ecommerce":
        exchange(3000);
        break;
      case "business":
        exchange(4000);
        break;
      default:
        setError("We need to know the project type");
        break;
    }
  };

  const RadioLabel = (props) => {
    return (
        <div className={classes.labelRoot}>
          <FormControlLabel
            value={props.value}
            control={<Radio />}
            label={props.label}
          />
          <IconButton>
            <HelpOutlineRounded />
          </IconButton>
        </div>)
  };

  return (
    <FormControl className={classes.rootRadio}>
      <FormLabel component={"legend"}>Project Type</FormLabel>
      <RadioGroup
        name={"e-commerce"}
        aria-label={"e-commerce-status"}
        value={radioState}
        onChange={(e) => setCost(e)}
      >
        <RadioLabel value={"advertise"} label={"Advertising Website"} />
        

        <div className={classes.labelRoot}>
          <FormControlLabel
            value={"blog"}
            control={<Radio />}
            label={"Blog Personal/Business"}
          />
          <IconButton>
            <HelpOutlineRounded />
          </IconButton>
        </div>

        <div className={classes.labelRoot}>
          <FormControlLabel
            value={"ecommerce"}
            control={<Radio />}
            label={"E-commerce Website/Application"}
          />
          <IconButton>
            <HelpOutlineRounded />
          </IconButton>
        </div>

        <div className={classes.labelRoot}>
          <FormControlLabel
            value={"business"}
            control={<Radio />}
            label={"Business Website/Application"}
          />
          <IconButton>
            <HelpOutlineRounded />
          </IconButton>
        </div>
        {error && <p className={"error-text"}>{error}</p>}
      </RadioGroup>
    </FormControl>
  );
}
