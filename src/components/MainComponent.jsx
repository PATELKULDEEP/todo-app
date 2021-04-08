import React, { useEffect, useState } from "react";
import "./mainComponentStyles.css";
import Tasks from "./Tasks";
import { useTasks } from "../context/context";
import { Button, Paper, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


// Material UI Styles start
const useStyles = makeStyles((theme) => ({
  rootHeaderForm: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      
    },
    display: "flex",
    justifyContent: "center"
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

// Material UI Styles End

function HomePage() {

  const [task, setTask] = useState("");
  const { tasks, addTasks } = useTasks();
  const [assending, setAssending] = useState([]);
  const [des,setDes] = useState([]); 
 
  useEffect( () => {async function sorting() {
    const sortedTask = await tasks.sort((a,b) => b.date - a.date);
    setAssending(sortedTask);
    setDes(sortedTask.reverse());
  }
  sorting()
  }, [tasks])

  const onSubmit = () => {
    addTasks(task);
    setTask("");
  };

  const classes = useStyles();

  return (
    <div className='home-page'>
      <Paper className='homepage-container' elevation={3}>
        <h1>TODO APP</h1>

        <div className='homepage-header'>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <form
                  className={classes.rootHeaderForm}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='standard-textarea'
                    label='Enter Your Task'
                    placeholder='Task'
                    multiline
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  <Button
                    onClick={onSubmit}
                    variant='contained'
                    disabled={!task}
                  >
                    Add Task
                  </Button>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                {assending.map((data, i) => {
                  return (
                    !data.completed && (
                      <Tasks key={i} idex={i} task={data} />
                    )
                  );
                })}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                
                {des.map((data, i) => {
                  return (
                    data.completed && ( 
                      <Tasks key={i} idex={i} task={data} />
                    )
                  );
                })}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}

export default HomePage;
