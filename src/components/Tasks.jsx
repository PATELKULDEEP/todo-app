import React, { useState } from "react";
import "./TaskStyles.css";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { green, pink } from "@material-ui/core/colors";
import {useTasks} from '../context/context';


function Tasks(props) {
  const [done, setDone] = useState(props.task.completed);
  const {toogleComplete, onDelete} = useTasks() 


  return (
    <div className="task-page">
      <div style={{ textDecoration: done ? "line-through" : "none" }} className="task"> 

        <div onClick={() =>{ setDone(!done);toogleComplete(props.idex) }} className="toggleIcon">
          <DoneOutlineIcon style={{ color: done ? green[500] : pink[500] }} />
        </div>
        <div className="taskText">
        {props.task.text}
        </div>
        <div onClick={() => onDelete(props.idex)} className="deleteIcon">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
