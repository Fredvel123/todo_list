import { useSelector } from "react-redux";
import { TodoListStyles } from "../../../styles/todo-list-styles/todolist";
import Footer from "./Footer";
import TasksList from "./Task_list";

export default function TodoList() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <TodoListStyles mode={theme}>
      <TasksList />
      <Footer />
    </TodoListStyles>
  );
}
