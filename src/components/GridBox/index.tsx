import { Grid, GridProps } from "@material-ui/core";

interface IProps extends GridProps {}

function GridBox({
  direction = "column",
  justifyContent = "center",
  alignItems = "center",
  ...props
}: IProps) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={justifyContent}
      alignItems={alignItems}
      direction={direction}
      {...props}
    >
      {props.children}
    </Grid>
  );
}

export default GridBox;
