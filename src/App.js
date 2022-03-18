import { useEffect, useRef, useState } from "react";
import Task from "./task";

// const tasks = ["hii", "jagdish", "happy holi"];
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState("");
  const enteredTask = useRef(null);

  const taskAdder = () => {
    if (userInput.length) {
      setTasks((prev_tasks) => {
        return [...prev_tasks, userInput];
      });
      setUserInput("");
    } else {
      enteredTask.current.select();
    }
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
          return <Task task={task} />;
        })}
      </section>
    </>
  );
};

export default App;
