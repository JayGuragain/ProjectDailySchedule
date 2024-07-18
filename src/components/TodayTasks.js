// src/components/TodayTasks.js
import React, { useState, useEffect } from "react";

function TodayTasks({ selectedDay }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("Personal");
  const [important, setImportant] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    setTasks(savedTasks[selectedDay] || []);
  }, [selectedDay]);

  const addTask = () => {
    const task = { task: newTask, priority, category, important };
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setNewTask("");
    setPriority("Low");
    setCategory("Personal");
    setImportant(false);
  };

  const saveTasks = (tasksToSave) => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    savedTasks[selectedDay] = tasksToSave;
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  };

  return (
    <div className="today-tasks">
      <h2>Today's Tasks</h2>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Others">Others</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
          />
          Important
        </label>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        <h3>Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{ color: task.important ? "blue" : "black" }}
            >
              {task.task} - {task.priority} - {task.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodayTasks;
