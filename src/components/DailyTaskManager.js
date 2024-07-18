// src/components/DailyTaskManager.js
import React, { useState, useEffect } from "react";

const DailyTaskManager = () => {
  const [previousDayGoals, setPreviousDayGoals] = useState([]);
  const [todayTasks, setTodayTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [goalInput, setGoalInput] = useState("");
  const [category, setCategory] = useState("Personal");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("todayTasks")) || [];
    setTodayTasks(storedTasks);

    const storedPreviousGoals =
      JSON.parse(localStorage.getItem("previousDayGoals")) || [];
    setPreviousDayGoals(storedPreviousGoals);
  }, []);

  const addTask = () => {
    const newTask = {
      task: taskInput,
      goal: goalInput,
      category,
      priority,
      completed: false,
    };
    const updatedTasks = [...todayTasks, newTask];
    setTodayTasks(updatedTasks);
    localStorage.setItem("todayTasks", JSON.stringify(updatedTasks));
    setTaskInput("");
    setGoalInput("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...todayTasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTodayTasks(updatedTasks);
    localStorage.setItem("todayTasks", JSON.stringify(updatedTasks));
  };

  const renderTasks = (tasks) => {
    return tasks.map((task, index) => (
      <li key={index} style={{ color: task.completed ? "green" : "red" }}>
        {task.task} - {task.goal} - {task.category} - {task.priority}
        <button onClick={() => toggleTaskCompletion(index)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
      </li>
    ));
  };

  return (
    <div className="daily-task-manager">
      <div className="previous-day-goals">
        <h2>Previous Day Goals</h2>
        <ul>{renderTasks(previousDayGoals)}</ul>
      </div>
      <div className="today-tasks">
        <h2>Today's Tasks</h2>
        <div className="task-input">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Task"
          />
          <input
            type="text"
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
            placeholder="Goal"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Others">Others</option>
          </select>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul>{renderTasks(todayTasks)}</ul>
      </div>
    </div>
  );
};

export default DailyTaskManager;
