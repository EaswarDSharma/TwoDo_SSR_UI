import Comp from './Comp.js'
import Notcomp from './notComp.js';
import CssBaseline  from "@material-ui/core/CssBaseline";
import React from "react";

const Merger =(props) =>{
 
console.log("from merger "+JSON.stringify(props.dataProp.done))
  return (
   <div>
      <CssBaseline />
      <Comp compProps={props.dataProp.tasks}/>
      <Notcomp ncompProps={props.dataProp.done}/>

   </div>
  );
}

export default Merger;
