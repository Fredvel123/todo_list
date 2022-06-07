import { useState } from "react";
import { useSelector } from "react-redux";
import { TodoListStyles } from "../../../styles/todo-list-styles/todolist";
import Footer from "./Footer";
import TasksList from "./Task_list";

export default function TodoList() {
  const theme = useSelector((state) => state.theme.value);
  const [modeTask, setModeTask] = useState([]);
  return (
    <TodoListStyles mode={theme}>
      <TasksList setState={setModeTask} state={modeTask} />
      <Footer state={modeTask} setState={setModeTask} />
    </TodoListStyles>
  );
}
