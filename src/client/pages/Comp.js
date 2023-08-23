import {
    Chip,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    IconButton,
    TextField,
    Box, Divider, Switch, styled,
  } from "@material-ui/core";
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  import DeleteIcon from '@material-ui/icons/Delete';
  import SaveIcon from '@material-ui/icons/Save';
  import CssBaseline from "@material-ui/core/CssBaseline";
  import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

  import React, {useState} from "react";
  import axios from 'axios';


  const Comp=(props)=> {
    const [value, setValue] = useState("");

    const handleSave = async (value,id) => {console.log(value+"   "+id)
    try{
    const response =   await axios.patch(`api/tasks/${id}`,{
      description:value})
    console.log("GOVINDA  "+JSON.stringify(response))
    setValue(value)
    }
      catch(error){
        console.log(error)
      }
    
    }
    const handleDone = async(id)=>{
      try{
      const response =   await axios.patch(`api/tasks/${id}`,{
        completed: true})
        console.log(response)
      }
      catch(error){
        console.log(error)
      }
    }

    const handleDelete = async (id) => {console.log("   "+id)
    try{
    const response =   await axios.delete(`api/tasks/${id}`)
    console.log("GOVINDA  "+JSON.stringify(response))
    setValue(value)
    }
      catch(error){
        console.log(error)
      }
    
    }

      // themeing
//     console.log(" from comp "+JSON.stringify(props.compProps[0]))
    return (
      <div  >
        <Box>
                  <CssBaseline />
                 
        
            <Button
            variant="outlined"
            startIcon={<CheckCircleOutlineIcon />}
            style={{ margin: "0px 20px 30px 10px", minWidth: 50, marginLeft:"680px"}}
            size="medium"
          >
            to complete
          </Button>
        <Divider style={{ margin: "0px 0px 0px 5px" }} variant="middle">
        </Divider>
        <Grid container direction="column" spacing={2} style={{ marginBottom: "70px", marginTop:"30px" }}>
          {props.compProps.map((n,i=0) => {
            //console.log("in final "+JSON.stringify(n))
            i===0?i=1:i=i+5;
            return (
              <Grid container direction="row" key={i*29} style={{ spacing: 4,marginBottom:"10px" ,fontSize:18}}>
                <Chip
                  key={ i*101+490}
                  label={i===1?i:i-4}
                  style={{
                    margin: "5px",
                    width:"40px",
                    background:
                      "linear-gradient(to right bottom, #430089, #82ffa1)",
                  }}
                />
                 <Chip
                  key={i*79 + 29}
                  label={n.description.slice(0,15)}
                  style={{ margin: "0px 20px", minWidth: 200 }}
                />
                 <Accordion
                  TransitionProps={{ unmountOnExit: true }}
                  key={i*31}
                  style={{
                    '&:before': {
                      display: 'none', },
                    margin: "0px 20px ",
                    width: 400,
                    borderRadius: "20px",
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} id={i}>
                    <div>{n.description.slice(0,15)}</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                      style={{ width: 350 }}
                      maxRows={12}
                      multiline={true}
                      minRows={5}
                      inputProps={{
                        style: { fontSize: 18, color: "primary", minRows: 5 },
                      }}
                      size="medium"
                      defaultValue={n.description}
                      onChange={(e)=>{console.log(e.target.value);setValue(e.target.value)}}
                    />
                    <Grid container direction="row" justifyContent="flex-end">
                      <IconButton key={i*40}  aria-label="edit" onClick={()=>handleSave(value,n._id)}>
                        <SaveIcon color="action" />
                      </IconButton>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                 <Chip
                    key={i*71 + 394}
                    label={n.updatedAt.substring(10, 5)}
                    style={{ margin: "0px 20px", minWidth: 100, fontSize: 17 }}
                  />
                <Chip
                  key={i*95+ 45}
                  label={n.updatedAt.substring(0,10)}
                  style={{ margin: "0px 20px", minWidth: 100, fontSize: 17 }}
                />
                <Chip
                  key={i*67 + 51}
                  label={"created on "+n.createdAt.substring(0,10)}
                  style={{ margin: "0px 20px", minWidth: 100, fontSize: 17 }}
                />
                <Chip
                 key={i*17 + 75}
                  label={"done"}
                  style={{ margin: "0px 20px", minWidth: 100, fontSize: 17 }}
                  onClick={()=>{handleDone(n._id)}}
                />
                <Chip
                 key={i*31 + 195}
                  icon={<DeleteIcon />}
                  style={{ margin: "0px 20px", backgroundColor: "white",maxWidth:"40px" }}
                  onClick={()=>{handleDelete(n._id)}}
                  deleteIcon={<DeleteIcon />}
                />
                  
               </Grid>
            );
          })}
        </Grid>
        </Box>
  
      </div>
    );
  }
  export default Comp;
  /* below chip 1

  */
  