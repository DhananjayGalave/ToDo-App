import React, { useState } from "react";
import "./App.css";
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
    <div className="app-container">
      <header>
        <h1>To-Do List</h1>
      </header>
      <main>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control addTask"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button
            className="btn btn-outline-dark createTask"
            onClick={handleCreateTask}
          >
            Create
          </button>
        </div>
        <div className="task-list">
          {taskList.map((task, index) => (
            <div key={index} classN ame="task-item">
              <input type="checkbox" className="checkbox" />
              <label>{task}</label>
              <button
                className="btn btn-sm btn-outline-dark mx-2"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
              <button
                className="btn btn-sm btn-outline-dark mx-2"
                onClick={() => {
                  const newTask = prompt("Edit your task", task);
                  if (newTask) handleEditTask(index, newTask);
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
        <button
          className="btn btn-outline-dark mt-3"
          onClick={handleDeleteChecked}
        >
          Delete Checked
        </button>
      </main>
    </div>
  );
};

export default App;
