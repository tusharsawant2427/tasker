import { Button, Card, Grid, TextField } from "@mui/material";
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import React, { useContext } from "react";
import { ACTIONS, DispatchContext, StateContext } from "../App";

const TaskForm = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const handleChange = (evt) =>
    dispatch({
      type: ACTIONS.UPDATE_TODO_TEXT_FIELD,
      payload: { taskValue: evt.target.value },
    });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO });
    dispatch({
      type: ACTIONS.UPDATE_TODO_TEXT_FIELD,
      payload: { taskValue: "" },
    });
  };

  const handleClear = () => {
    dispatch({
      type: ACTIONS.UPDATE_TODO_TEXT_FIELD,
      payload: { taskValue: "" },
    });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Card sx={{ padding: 4 }} raised="true">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={8}>
                <TextField
                  value={state.todo}
                  id="task-input"
                  label="Insert your task"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit}
                >
                  <DataSaverOnOutlinedIcon /> Submit
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={handleClear}
                >
                  <DeleteOutlinedIcon /> Clear
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskForm;
