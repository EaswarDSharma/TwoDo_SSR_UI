import {
  Chip,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  AppBar,
  TextField,
  Fab,
  Toolbar,
  CssBaseline,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import { styled } from "@material-ui/core/styles";
import React, { useMemo, useState } from "react";
import axios from "axios";
function Notcomp(props) {
  const [text, setText] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.post(`api/tasks/`, {
        description: text,
      });
    
    } catch (error) {
      console.error("Error:", error);
    }
  };
  function Add() {
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
          style={{ top: "auto", bottom: 0, minHeight: "130px" }}
        >
          <Grid container direction="row" justifyContent="center">
            <Toolbar>
              <div style={{ display: "flex", alignItems: "center" }}>
                <StyledFab color="secondary" aria-label="add"  onClick={handleClick}>
                  <AddSharpIcon fontSize="large" />
                </StyledFab>
                <TextField
                  style={{
                    width: 350,
                    fontSize: 14,
                    backgroundColor: "white",
                    borderRadius: 5,
                    marginLeft: "430px",
                  }}
                  minRows={6}
                  maxRows={6.4}
                  multiline={true}
                  size="medium"
                  placeholder="add a task"
                  margin="dense"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "350px", marginTop: "40px" }}
                >
                  Logout
                </Button>
              </div>
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    );
  }
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`api/tasks/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const data = ()=>{ return(
      props.ncompProps.map((n, i = 0) => {
          i === 0 ? (i = 1) : (i = i + 5);
          return (
            <Grid
              container
              direction="row"
              key={i}
              style={{ spacing: 3, marginBottom: "10px", fontSize: 18 }}
            >
              <Chip
                label={i === 1 ? i : i - 4}
                style={{
                  margin: "5px",
                  width: "40px",
                  background:
                    "linear-gradient(to right bottom, #430089, #82ffa1)",
                }}
              />
              <Chip
                label={n.description.slice(0, 15)}
                style={{ margin: "0px 10px", minWidth: 200 }}
              />
              <Accordion
                TransitionProps={{ unmountOnExit: true }}
                style={{
                  margin: "0px 20px ",
                  width: 400,
                  borderRadius: "20px",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id={i}>
                  <div>{n.description.slice(0, 15)}</div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{n.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <Chip
                label={n.updatedAt.substring(10, 5)}
                style={{ margin: "0px 10px", minWidth: 100, fontSize: 17 }}
              />
              <Chip
                label={"" + n.updatedAt.substring(0, 10)}
                style={{ margin: "0px 10px", minWidth: 100, fontSize: 17 }}
              />
              <Chip
                label={"created on " + n.createdAt.substring(0, 10)}
                style={{ margin: "0px 10px", minWidth: 100, fontSize: 17 }}
              />
              <Chip
                label={"undone"}
                style={{ margin: "0px 10px", minWidth: 100, fontSize: 17 }}
              />
              <Chip
                icon={<DeleteIcon />}
                style={{ margin: "0px 10px", backgroundColor: "white" }}
                deleteIcon={<DeleteIcon />}
                onClick={() => {
                  handleDelete(n._id);
                }}
              />
            </Grid>
          );
        })

  )}
  const memoData = useMemo(()=>{ return data()},[props.ncompProps])
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<NotInterestedIcon />}
        style={{
          margin: "0px 20px 30px 10px",
          minWidth: 50,
          marginLeft: "600px",
        }}
        size="medium"
      >
        completed
      </Button>
      <Divider style={{ margin: "0px 0px 0px 5px" }}></Divider>
      <Grid
        container
        direction="column"
        spacing={2}
        style={{ marginBottom: "150px", marginTop: "30px" }}
      >
        {memoData}
      </Grid>
      {Add()}
    </div>
  );
}
export default Notcomp;
