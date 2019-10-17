import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: "undo"
        }
      }
    }
  }
});

export default theme;
