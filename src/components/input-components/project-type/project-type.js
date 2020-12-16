import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  makeStyles,
  IconButton,
  Grow,
} from "@material-ui/core";
import { Close, HelpOutlineRounded } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HelpText from "../../help/help-text/help-text";

const useStyles = makeStyles(() => ({
  rootRadio: {},
  labelRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function ProjectType(props) {
  // const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  const [radioState, setRadioState] = useState(null);
  const [hasChanged, setHasChanged] = useState(null); // Value to be tracked as input is selected
  const [error, setError] = useState(null);
  const options = require("./options.json");

  const classes = useStyles();

  const exchange = (value) => {
    let e = parseInt(value);
    setRadioState(e);
    dispatch({ type: "SUBTRACT_TOTAL", value: hasChanged });
    dispatch({ type: "ADD_TOTAL", value: e });
    setHasChanged(e);
    error && setError(null);
  };

  const RadioLabel = (props) => {
    const [showingHelp, setShowingHelp] = useState(false);

    return (
      <div>
        <div className={classes.labelRoot}>
          <FormControlLabel
            value={props.value}
            control={<Radio />}
            label={props.label}
          />
          <IconButton
            onClick={
              !showingHelp
                ? () => setShowingHelp(true)
                : () => setShowingHelp(false)
            }
          >
            {!showingHelp ? <HelpOutlineRounded /> : <Close />}
          </IconButton>
        </div>
        <Grow in={showingHelp} unmountOnExit>
          <HelpText text={props.help} side={props.side}/>
        </Grow>
      </div>
    );
  };

  useEffect(() => {
    if (Array.isArray(options)) {
      var lowest = Number.POSITIVE_INFINITY;
      var tmp;
      for (var i = options.length - 1; i >= 0; i--) {
        tmp = options[i].value;
        if (tmp < lowest) lowest = tmp;
      }
      setRadioState(lowest);
      setHasChanged(lowest);
    }
  }, []);

  return (
    <FormControl className={classes.rootRadio}>
      <FormLabel component={"legend"}>Project Type</FormLabel>
      <RadioGroup
        name={"project-type"}
        aria-label={"project-type"}
        value={radioState}
        onChange={(e) => exchange(e.target.value)}
      >
        {Array.isArray(options) &&
          options.map((o, i) => (
            <RadioLabel
              key={i}
              value={o.value}
              label={o.label}
              help={o.description}
              side={i}
            />
          ))}
        {error && <p className={"error-text"}>{error}</p>}
      </RadioGroup>
    </FormControl>
  );
}
