import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../../redux/slices/tasks";
import { InsertTasksStyles } from "../../../styles/insertTasks-styles";

export default function InsertTasks() {
  const theme = useSelector((state) => state.theme.value);
  // tasks
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  const [titleTask, setTitleTask] = useState("");

  const handlerChangeTask = (e) => {
    setTitleTask(e.target.value);
  };

  const storageTasks = async () => {
    const items = await tasks;
    localStorage.setItem("tasks", JSON.stringify(items));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    // if tasks is already created, don't create task
    if (!tasks.find((item) => item.task === titleTask)) {
      dispatch(setTasks([...tasks, { task: titleTask, completed: false }]));
    }
  };

  useEffect(() => {
    storageTasks();
  }, [tasks]);

  return (
    <InsertTasksStyles onSubmit={handlerSubmit} mode={theme}>
      <input
        type="text"
        onChange={handlerChangeTask}
        placeholder="add a task here"
      />
    </InsertTasksStyles>
  );
}
