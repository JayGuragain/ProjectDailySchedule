// src/components/PreviousDayGoals.js
import React, { useState, useEffect } from "react";

function PreviousDayGoals({ selectedDay }) {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [remainingTasks, setRemainingTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    const savedCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || {};
    const yesterday = getYesterday(selectedDay);
    setRemainingTasks(savedTasks[yesterday] || []);
    setCompletedTasks(savedCompletedTasks[yesterday] || []);
  }, [selectedDay]);

  const getYesterday = (day) => {
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const index = daysOfWeek.indexOf(day);
    return index === 0 ? "Sunday" : daysOfWeek[index - 1];
  };

  return (
    <div className="previous-day-goals">
      <h2>Previous Day Goals</h2>
      <div className="completed-tasks">
        <h3>Completed Tasks</h3>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index} style={{ color: "green" }}>
              {task.task} - {task.priority}
            </li>
          ))}
        </ul>
      </div>
      <div className="remaining-tasks">
        <h3>Remaining Tasks</h3>
        <ul>
          {remainingTasks.map((task, index) => (
            <li key={index} style={{ color: "red" }}>
              {task.task} - {task.priority}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PreviousDayGoals;
