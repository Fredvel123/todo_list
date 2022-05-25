// components and styles
import { TasksStyled } from "../../styles/tasks/tasks";
import Header from "./Header";
import { InsertTasks } from "./insertTask";

export default function Tasks() {
  return (
    <TasksStyled>
      <Header />
      <InsertTasks />
    </TasksStyled>
  );
}
