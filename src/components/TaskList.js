import { Card, Grid, List } from "@mui/material";

import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, dispatch }) => {
  return (
    <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
      <Grid item xs={12}>
        <Card sx={{ padding: 1 }} raised="true">
          <List sx={{ padding: 1 }}>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} dispatch={dispatch} />
            ))}
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskList;
