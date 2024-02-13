import {
  Button,
  Checkbox,
  Chip,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import React, { useContext } from "react";
import { ACTIONS, DispatchContext } from "../App";

const TaskItem = ({ task}) => {
  const dispatch = useContext(DispatchContext);

  const handleDelete = (id) =>
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { taskId: id } });
  const handleToggle = (id) =>
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { taskId: id } });

  return (
    <ListItem
      key={1}
      sx={{ paddingBottom: 2, paddingTop: 2, borderBottom: "solid 1px #AAA" }}
      disablePadding
    >
      <Checkbox
        checked={task.isCompleted}
        onChange={() => handleToggle(task.id)}
      />
      <ListItemText
        primary={task.value}
        style={task.isCompleted ? { textDecoration: "line-through" } : {}}
      />

      <ListItemSecondaryAction>
        <Chip
          label={task.isCompleted ? "Completed" : "Pending"}
          variant="outlined"
          color={task.isCompleted ? "success" : "warning"}
        />
        <Button
          variant="contained"
          color="error"
          sx={{ marginLeft: 5 }}
          onClick={() => handleDelete(task.id)}
        >
          <DeleteForeverOutlinedIcon /> Delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
