import {
    Chip,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    IconButton,
    TextField,
    Box, Divider,
  } from "@material-ui/core";
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  import DeleteIcon from '@material-ui/icons/Delete';
  import SaveIcon from '@material-ui/icons/Save';
  import CssBaseline from "@material-ui/core/CssBaseline";
  import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
  import React, {useMemo} from "react";
  import axios from 'axios';


  const Comp=(props)=> {
    const handleSave = async (value,id) => {
    try{
    const response =   await axios.patch(`api/tasks/${id}`,{
      description:value})
       
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

    const handleDelete = async (id) => {
    try{
    const response =   await axios.delete(`api/tasks/${id}`)
    }
      catch(error){
        console.log(error)
      }
    
    }
    const data = ()=>{return(props.compProps.map((n,i=0) => {
      i===0?i=1:i=i+5;
      return (
        <Grid container direction="row" key={i} style={{ spacing: 3,marginBottom:"10px" ,fontSize:18}}>
          <Chip
            label={i===1?i:i-4}
            style={{
              margin: "5px",
              width:"40px",
              background:
                "linear-gradient(to right bottom, #430089, #82ffa1)",
            }}
          />
           <Chip
            label={n.description.slice(0,15)}
            style={{ margin: "0px 10px", minWidth: 200 }}
          />
           <Accordion
            TransitionProps={{ unmountOnExit: true }}
            key={i+30}
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
                onChange={(e)=>{console.log(e.target.value);}}
              />
              <Grid container direction="row" justifyContent="flex-end">
                <IconButton   aria-label="edit" onClick={()=>handleSave(value,n._id)}>
                  <SaveIcon color="action" />
                </IconButton>
              </Grid>
            </AccordionDetails>
          </Accordion>
           <Chip
              label={n.updatedAt.substring(10, 5)}
              style={{ margin: "0px 10px", minWidth: 100, fontSize: 17 }}
            />
          <Chip
            label={n.updatedAt.substring(0,10)}
            style={{ margin: "0px 10px", minWidth: 100, fontSize: 17 }}
          />
          <Chip
            label={"created on "+n.createdAt.substring(0,10)}
            style={{ margin: "0px 10px", minWidth: 100, fontSize: 17 }}
          />
          <Chip
            label={"done"}
            style={{ margin: "0px 10px", minWidth: 100, fontSize: 17 }}
            onClick={()=>{handleDone(n._id)}}
          />
          <Chip
            icon={<DeleteIcon />}
            style={{ margin: "0px 10px", backgroundColor: "white",maxWidth:"40px" }}
            onClick={()=>{handleDelete(n._id)}}
            deleteIcon={<DeleteIcon />}
          />
            
         </Grid>
      );
    }))}
   const  memoData = useMemo(()=>{return data()},[props.compProps])
    return (
      <div  >
        <Box>
                  <CssBaseline />
            <Button
            variant="outlined"
            startIcon={<CheckCircleOutlineIcon />}
            style={{ margin: "0px 20px 30px 10px", minWidth: 50, marginLeft:"610px", marginTop:"10px"}}
            size="medium"
          >
            to complete
          </Button>
        <Divider style={{ margin: "0px 0px 0px 5px" }} variant="middle">
        </Divider>
        <Grid container direction="column" spacing={2} style={{ marginBottom: "70px", marginTop:"30px" }}>
          {memoData}
        </Grid>
        </Box>
  
      </div>
    );
  }
  export default Comp;
