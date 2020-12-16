import { Grid, Icon } from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";

export default function HelpText(props) {
  return (
    <Grid container alignItems={"center"}>
      {props.side && props.side % 2 === 0 && (
        <Grid item md={3}>
          <Icon>
            <HelpOutline
              style={{ width: 50, height: 50, color: "yellowgreen" }}
            />
          </Icon>
        </Grid>
      )}
      <Grid item md={9}>
        <p>{props.text}</p>
      </Grid>
      {props.side && props.side % 2 !== 0 && (
        <Grid item md={3}>
          <Icon>
            <HelpOutline
              style={{ width: 50, height: 50, color: "yellowgreen" }}
            />
          </Icon>
        </Grid>
      )}
    </Grid>
  );
}
