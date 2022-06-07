import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../../redux/slices/tasks.js";
import {
  CrossIcon,
  LineStyle,
  TasksListStyles,
} from "../../../styles/todo-list-styles/tasksListStyles";
import Image from "next/image";
import checkedIcon from "../../../assets/images/icon-check.svg";
import crossIcon from "../../../assets/images/icon-cross.svg";
import { useEffect } from "react";

export default function TasksList({ state, setState }) {
  const tasks = useSelector((state) => state.tasks.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const toggleTasks = (elem) => {
    dispatch(
      setTasks(
        tasks.map((t) =>
          t.task === elem.task ? { ...t, completed: !t.completed } : t
        )
      )
    );
    setState(
      tasks.map((t) =>
        t.task === elem.task ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTask = (elem) => {
    const taskRemoved = tasks.filter((item) => item.task !== elem.task);
    dispatch(setTasks(taskRemoved));
    setState(taskRemoved);
  };

  useEffect(() => {
    const updateTasks = async () => {
      setState(tasks);
    };
    updateTasks();
  }, [tasks]);
  return (
    <>
      {state.length > 0 ? (
        state.map((item, index) => (
          <>
            <TasksListStyles key={index} mode={theme}>
              <div className={item.completed ? "image" : "no-image"}>
                <Image
                  alt="checkedIcon"
                  className="checkedIcon"
                  src={checkedIcon}
                  onClick={() => toggleTasks(item)}
                />
              </div>
              <p mode={theme}>{item.task}</p>
              {item.completed ? (
                <CrossIcon
                  onClick={() => removeTask(item)}
                  alt="crossIcon"
                  src={crossIcon}
                />
              ) : null}
            </TasksListStyles>
            <LineStyle />
          </>
        ))
      ) : (
        <p>there are no tasks added yet</p>
      )}
    </>
  );
}
