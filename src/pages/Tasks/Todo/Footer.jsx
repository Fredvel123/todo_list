import { useSelector } from "react-redux";
import { FoorterStyles } from "../../../styles/todo-list-styles/footer";

export default function Footer() {
  const theme = useSelector((state) => state.theme.value);
  const tasks = useSelector((state) => state.tasks.value);

  return (
    <FoorterStyles mode={theme}>
      <div className="up">
        <p>{tasks.length} items left</p>
        <p>Clear completed</p>
      </div>
      <div className="down">
        <p>All </p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </FoorterStyles>
  );
}
