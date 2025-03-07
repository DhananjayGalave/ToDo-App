import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleCreateTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be blank");
    } else {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  const handleEditTask = (index, newTask) => {
    const updatedTasks = taskList.map((item, i) => (i === index ? newTask : item));
    setTaskList(updatedTasks);
  };

  const handleDeleteChecked = () => {
    const checkboxes = document.querySelectorAll(".checkbox");
    const updatedTasks = taskList.filter((_, index) => !checkboxes[index].checked);
    setTaskList(updatedTasks);
    alert("Checked tasks deleted");
  };

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4">To-Do List</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button className="btn btn-dark" onClick={handleCreateTask}>
            Create
          </button>
        </div>
        <ul className="list-group">
          {taskList.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" className="checkbox me-2" />
                {task}
              </div>
              <div>
                <button className="btn btn-sm btn-outline-danger mx-1" onClick={() => handleDeleteTask(index)}>
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-outline-primary mx-1"
                  onClick={() => {
                    const newTask = prompt("Edit your task", task);
                    if (newTask) handleEditTask(index, newTask);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
        {taskList.length > 0 && (
          <button className="btn btn-danger mt-3 w-100" onClick={handleDeleteChecked}>
            Delete Checked
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
