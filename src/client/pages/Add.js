import AddSharpIcon from '@material-ui/icons/AddSharp';
import { styled } from "@material-ui/core/styles";
import {
  AppBar,
  TextField,
  Fab,
  Toolbar,
  Grid,
  CssBaseline,
} from "@material-ui/core";
import React from "react";

function Add  (props)  {
  const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

  return (
    <div>
          <CssBaseline />
      <AppBar
        position="fixed"
        elevation={4}
        color="primary"
        sx={{ top: "auto", bottom: 0, minHeight: "100px" }}
      >
        <Grid direction="row" justifyContent="center">
          <Toolbar>
            <StyledFab color="secondary" aria-label="add">
              <AddSharpIcon fontSize="large" />
            </StyledFab>
            <TextField
              style={{
                width: 350,
                fontSize: 14,
                backgroundColor: "white",
                borderRadius: 5,
              }}
              maxRows={12}
              minRows={2.4}
              multiline={true}
              size="medium"
              placeholder="add a task"
              margin="dense"
            />
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Add;
