import { Card, Grid, List } from "@mui/material";

import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import { StateContext } from "../App";

const TaskList = () => {
  const state = useContext(StateContext);

  return (
    <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
      <Grid item xs={12}>
        <Card sx={{ padding: 1 }} raised="true">
          <List sx={{ padding: 1 }}>
            {state.todos.map((task) => (
              <TaskItem key={task.id} task={task}/>
            ))}
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskList;
