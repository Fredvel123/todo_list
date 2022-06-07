import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../../redux/slices/tasks";
import { FoorterStyles } from "../../../styles/todo-list-styles/footer";

export default function Footer({ state, setState }) {
  const theme = useSelector((state) => state.theme.value);
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();
  const removerAllTasksCompleted = () => {
    const tasksToBeRemoved = tasks.filter((t) => t.completed === false);
    dispatch(setTasks(tasksToBeRemoved));
  };

  const getAllTasks = () => {
    setState(tasks);
  };

  const getCompletedTasks = () => {
    const tasksCompleted = tasks.filter((t) => t.completed === true);
    setState(tasksCompleted);
  };

  const activateTasks = () => {
    const activatedtasks = tasks.filter((t) => t.completed === false);
    setState(activatedtasks);
  };

  return (
    <FoorterStyles mode={theme}>
      <div className="up">
        <p>{state.length} items left</p>
        <p className="click" onClick={removerAllTasksCompleted}>
          Clear completed
        </p>
      </div>
      <div className="down">
        <p onClick={getAllTasks} className="click">
          All{" "}
        </p>
        <p onClick={activateTasks} className="click">
          Active
        </p>
        <p onClick={getCompletedTasks} className="click">
          Completed
        </p>
      </div>
    </FoorterStyles>
  );
}
