import { useSelector } from "react-redux";
import { InsertTasksStyles } from "../../../styles/insertTasks-styles";

export function InsertTasks() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <InsertTasksStyles mode={theme}>
      <input type="text" placeholder="add a task here" />
    </InsertTasksStyles>
  );
}
