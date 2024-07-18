// src/components/EditableSchedule.js

import React, { useState } from "react";
import scheduleData from "../scheduleData";

const EditableSchedule = ({ day }) => {
  const [schedule, setSchedule] = useState(scheduleData[day]);

  const handleInputChange = (index, field, value) => {
    const updatedSchedule = schedule.map((task, i) =>
      i === index ? { ...task, [field]: value } : task
    );
    setSchedule(updatedSchedule);
    localStorage.setItem(day, JSON.stringify(updatedSchedule));
  };

  return (
    <div className="day">
      <h2>{day}</h2>
      <ul>
        {schedule.map((task, index) => (
          <li key={index}>
            <input
              type="text"
              value={task.time}
              onChange={(e) => handleInputChange(index, "time", e.target.value)}
            />
            <input
              type="text"
              value={task.task}
              onChange={(e) => handleInputChange(index, "task", e.target.value)}
            />
            <input
              type="text"
              value={task.goal}
              onChange={(e) => handleInputChange(index, "goal", e.target.value)}
            />
            <input
              type="date"
              value={task.date}
              onChange={(e) => handleInputChange(index, "date", e.target.value)}
            />
            <textarea
              value={task.notes}
              onChange={(e) =>
                handleInputChange(index, "notes", e.target.value)
              }
              placeholder="Notes"
            ></textarea>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditableSchedule;
