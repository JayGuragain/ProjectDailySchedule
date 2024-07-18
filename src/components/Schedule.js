// src/components/Schedule.js
import React, { useState } from "react";
const initialScheduleData = {
  Monday: [
    {
      time: "6:00 am - 7:00 am",
      task: "Reading Book",
      goal: "Mindfulness",
      notes: "",
      date: "",
    },
    {
      time: "7:15 am - 9:15 am",
      task: "Studying Course (Pomodoro)",
      goal: "Career and Dreams",
      notes: "",
      date: "",
    },
    {
      time: "9:30 am - 11:00 am",
      task: "Project/Assignment Work",
      goal: "Practice",
      notes: "",
      date: "",
    },
    {
      time: "11:30 am - 5:00 pm",
      task: "Full-Time Job (Deep Work Session)",
      goal: "Job",
      notes: "",
      date: "",
    },
    {
      time: "5:00 pm - 7:00 pm",
      task: "Household Tasks and Family Time",
      goal: "",
      notes: "",
      date: "",
    },
    { time: "7:00 pm - 8:00 pm", task: "Rest", goal: "", notes: "", date: "" },
    {
      time: "8:00 pm - 11:00 pm",
      task: "Project/Course Work (Pomodoro)",
      goal: "Dreams",
      notes: "",
      date: "",
    },
  ],
  Tuesday: [
    {
      time: "6:00 am - 7:00 am",
      task: "Reading Book",
      goal: "Mindfulness",
      notes: "",
      date: "",
    },
    {
      time: "7:15 am - 11:00 am",
      task: "PailSail (Pomodoro)",
      goal: "Dreams",
      notes: "",
      date: "",
    },
    {
      time: "8:00 pm - 11:00 pm",
      task: "Project/Course Work (Pomodoro)",
      goal: "Dreams",
      notes: "",
      date: "",
    },
  ],
  Wednesday: [
    {
      time: "6:00 am - 7:00 am",
      task: "Reading Book",
      goal: "Mindfulness",
      notes: "",
      date: "",
    },
    {
      time: "7:15 am - 9:15 am",
      task: "Studying Course (Pomodoro)",
      goal: "Career and Dreams",
      notes: "",
      date: "",
    },
    {
      time: "9:30 am - 11:00 am",
      task: "Project/Assignment Work",
      goal: "Practice",
      notes: "",
      date: "",
    },
    {
      time: "11:30 am - 5:00 pm",
      task: "Full-Time Job (Deep Work Session)",
      goal: "Job",
      notes: "",
      date: "",
    },
    {
      time: "5:00 pm - 7:00 pm",
      task: "Household Tasks and Family Time",
      goal: "",
      notes: "",
      date: "",
    },
    { time: "7:00 pm - 8:00 pm", task: "Rest", goal: "", notes: "", date: "" },
    {
      time: "8:00 pm - 11:00 pm",
      task: "Project/Course Work (Pomodoro)",
      goal: "Dreams",
      notes: "",
      date: "",
    },
  ],
  Thursday: [
    {
      time: "6:00 am - 7:00 am",
      task: "Reading Book",
      goal: "Mindfulness",
      notes: "",
      date: "",
    },
    {
      time: "7:15 am - 11:00 am",
      task: "PailSail (Pomodoro)",
      goal: "Dreams",
      notes: "",
      date: "",
    },
    {
      time: "8:00 pm - 11:00 pm",
      task: "Project/Course Work (Pomodoro)",
      goal: "Dreams",
      notes: "",
      date: "",
    },
  ],
  Friday: [
    {
      time: "6:00 am - 7:00 am",
      task: "Reading Book",
      goal: "Mindfulness",
      notes: "",
      date: "",
    },
    {
      time: "7:15 am - 9:15 am",
      task: "Studying Course (Pomodoro)",
      goal: "Career and Dreams",
      notes: "",
      date: "",
    },
    {
      time: "9:30 am - 11:00 am",
      task: "Project/Assignment Work",
      goal: "Practice",
      notes: "",
      date: "",
    },
    {
      time: "11:30 am - 5:00 pm",
      task: "Full-Time Job (Deep Work Session)",
      goal: "Job",
      notes: "",
      date: "",
    },
    {
      time: "5:00 pm - 7:00 pm",
      task: "Household Tasks and Family Time",
      goal: "",
      notes: "",
      date: "",
    },
    { time: "7:00 pm - 8:00 pm", task: "Rest", goal: "", notes: "", date: "" },
    {
      time: "8:00 pm - 11:00 pm",
      task: "Project/Course Work (Pomodoro)",
      goal: "Dreams",
      notes: "",
      date: "",
    },
  ],
  Saturday: [
    {
      time: "6:00 am - 7:00 am",
      task: "Reading Book",
      goal: "Mindfulness",
      notes: "",
      date: "",
    },
    {
      time: "7:15 pm - 10:00 pm",
      task: "Cutting Grass, Plants and Garage",
      goal: "",
      notes: "",
      date: "",
    },
    { time: "12 am - 4:00 pm", task: "Grocery", goal: "", notes: "", date: "" },
    {
      time: "5:15 pm - 8:00 pm",
      task: "Back yard and Front yard work, Home Improvement",
      goal: "",
      notes: "",
      date: "",
    },
  ],
  Sunday: [
    {
      time: "6:00 am - 7:00 am",
      task: "Reading Book",
      goal: "Mindfulness",
      notes: "",
      date: "",
    },
    {
      time: "7:15 am - 9:15 am",
      task: "Studying Course (Pomodoro)",
      goal: "Career and Dreams",
      notes: "",
      date: "",
    },
    {
      time: "9:30 am - 11:00 am",
      task: "Project/Assignment Work",
      goal: "Practice",
      notes: "",
      date: "",
    },
    {
      time: "11:30 am - 5:00 pm",
      task: "Business Development (Deep Work Session)",
      goal: "Job",
      notes: "",
      date: "",
    },
    {
      time: "5:00 pm - 7:00 pm",
      task: "Household Tasks and Family Time",
      goal: "",
      notes: "",
      date: "",
    },
    { time: "7:00 pm - 8:00 pm", task: "Rest", goal: "", notes: "", date: "" },
    {
      time: "8:00 pm - 11:00 pm",
      task: "Project/Course Work (Pomodoro)",
      goal: "Dreams",
      notes: "",
      date: "",
    },
  ],
};
const Schedule = () => {
  const [scheduleData, setScheduleData] = useState(initialScheduleData);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Monday");

  const handleChange = (day, index, field, value) => {
    const updatedDay = scheduleData[day].map((item, idx) => {
      if (idx === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setScheduleData({ ...scheduleData, [day]: updatedDay });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      localStorage.setItem("scheduleData", JSON.stringify(scheduleData));
    }
  };

  return (
    <div className="schedule">
      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        {Object.keys(scheduleData).map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <h2>{selectedDay}</h2>
      <ul>
        {scheduleData[selectedDay].map((item, index) => (
          <li key={index}>
            <strong>{item.time}</strong>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={item.task}
                  onChange={(e) =>
                    handleChange(selectedDay, index, "task", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={item.goal}
                  onChange={(e) =>
                    handleChange(selectedDay, index, "goal", e.target.value)
                  }
                />
              </>
            ) : (
              <>
                <div>{item.task}</div>
                <em>Goal: {item.goal}</em>
              </>
            )}
            {isEditing ? (
              <textarea
                value={item.note}
                onChange={(e) =>
                  handleChange(selectedDay, index, "note", e.target.value)
                }
                placeholder="Notes"
              />
            ) : (
              <div className="note">{item.note}</div>
            )}
          </li>
        ))}
      </ul>
      <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
};

export default Schedule;
