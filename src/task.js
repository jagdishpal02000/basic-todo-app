import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task }) => {
  return (
    <div className="task">
      <label className="title">{task}</label>
      <FontAwesomeIcon className="edit" icon={faPenToSquare} />
      <FontAwesomeIcon className="trash" icon={faTrashAlt} />
    </div>
  );
};

export default Task;
