import { useEffect, useRef, useState } from "react";
// import Task from "./task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState("");
  const enteredTask = useRef(null);

  const taskTitle = useRef(null);

  const taskAdder = () => {
    if (userInput.length) {
      const task_obj = { id: new Date().getTime().toString(), name: userInput };
      setTasks((prev_tasks) => {
        console.log(task_obj);
        return [...prev_tasks, task_obj];
      });
      setUserInput("");
    } else {
      enteredTask.current.select();
    }
  };

  const editTask = (taskId) => {
    taskTitle.current.disabled = false;
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(newTasks);
  };

  useEffect(() => {
    enteredTask.current.select();
  }, []);

  return (
    <>
      <h1 className="header">ToDo</h1>
      <div className="task-adder">
        <input
          ref={enteredTask}
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          type="text"
        />
        <button onClick={taskAdder}>Add Task</button>
      </div>
      <section className="task-list">
        {tasks.map((task) => {
          return (
            <div key={task.id} className="task">
              <textarea
                ref={taskTitle}
                maxLength="200"
                className="title"
                disabled
                value={task.name}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <FontAwesomeIcon
                className="edit"
                onClick={() => editTask(task.id)}
                icon={faPenToSquare}
              />
              <FontAwesomeIcon
                onClick={() => deleteTask(task.id)}
                className="trash"
                icon={faTrashAlt}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default App;
